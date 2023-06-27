const bidModel = require('../../Model/bidModel');
const propertyModel = require('../../Model/propertyModel');

const getBidByPropertyId = (async (req, res) => {

    const propertyid = req.params.propertyId
    console.log(propertyid)
    try {
        const bidsExist = await bidModel.findOne({ propertyId: propertyid }).select(
            {
                _id:1,
                clientId:1,
                propertyId: 1,
                bidPosition: 1,
                bidDate: 1
            }).lean()

        console.log("Bid", bidsExist)

        if (bidsExist) {
            return res.json({
                message: `Bid found`,
                Status_Reply: "Bid found",
                BidInfo: bidsExist,
            })
        } else {
            return res.json({
                message: `Bid not found`,
                Status_Reply: "Bid not found",
            })
        }
    } catch (error) {
        console.log("Please verify your details");
        return res.json({
            message: `Please verify your details`, error,
            Status_Reply: "Request failed"
        })
    }
})

module.exports = {
    getBidByPropertyId
}
