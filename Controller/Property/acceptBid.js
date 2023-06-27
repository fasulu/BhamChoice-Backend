
const { validationResult } = require('express-validator');  // to process error results

const clientModel = require('../../Model/clientModel');
const bidModel = require('../../Model/bidModel');
const propertyModel = require('../../Model/propertyModel')

const acceptBid = (async (req, res) => {

    const errorVal = validationResult(req);
    var extractedErrors = [];

    const clientId = req.body.clientId;
    const propertyId = req.body.propertyId;
    const bidPosition = req.body.bidPosition;
    const bidDate = req.body.bidDate;
    var currentBids =0;
    // const bidDate = new Date().toISOString().slice(0, 19); // produces 2023-03-04T12:31:42

    console.log(`${clientId}, ${propertyId}, ${bidPosition}, ${bidDate}`);

    try {

        const bidsExist = await bidModel.find({ propertyId: propertyId }).select(
            {
                _id: 1
            }
        ).lean()

        if(bidsExist){
            var currentBids = bidsExist.length + 1;
            console.log(currentBids)
        }

        if (errorVal.isEmpty()) {

            const propertyExist = await propertyModel.findOne({ propertyId: propertyId }).select(
                {
                    propertyId: 1
                }
            ).lean()

            if (!propertyExist) {
                return res.json({
                    message: `No such property found`,
                    Status_Reply: "Request failed",
                })
            }

            const clientExist = await clientModel.findOne({ _id: clientId }).select(
                {
                    _id: 1
                }
            ).lean()

            console.log(`ClientExist ${clientExist}`)

            if (clientExist) {
                const alreadyBidExist = await bidModel.find({ $and: [{ clientId: clientId }, { propertyId: propertyId }] }).select(
                    { propertyId: 1, bidDate: 1 }
                )
                console.log(`propertyId ${alreadyBidExist}`)

                if (alreadyBidExist.length > 0) {
                    return res.json({
                        message: `Your bid already exist`,
                        Status_Reply: "Bid already exist",
                        BidInfo: alreadyBidExist,
                    })
                } else {
                    console.log(`propertyId ${alreadyBidExist}`)
                    const bidInfo = await bidModel.create([
                        {
                            clientId: clientId,
                            propertyId: propertyId,
                            bidPosition: currentBids,
                            bidDate: bidDate
                        }])
                    console.log("Bid Information ", bidInfo)
                    return res.json({
                        message: `Bid saved successfully`,
                        Status_Reply: "Bid Success",
                        BidInfo: bidInfo,
                    })
                }
            }
            return res.json({
                message: `Client not exist`,
                Status_Reply: "Request failed",
            })

        } else {
            extractedErrors = []
            errorVal.errors.map(err => extractedErrors.push({ [err.param]: err.msg }));
            console.log("Please verify the details", extractedErrors);
            console.log(errorVal.errors[0].param)
            return res.json({
                message: `Please verify the details`,
                Status_Reply: errorVal.errors[0].param
            })
        }

    } catch (error) {
        console.log("Error while saving your details", error)
        return res.json({
            message: `Error while saving your details`,
            Status_Reply: error
        })
    }
})

module.exports = {
    acceptBid
}
