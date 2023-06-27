const bidModel = require('../../Model/bidModel');

const getBidListbyClientId = (async (req, res) => {
    
    const clientid= req.params.clientId
    console.log(clientid)
    try {
        const BidsExist = await bidModel.find({ clientId: clientid }).select(            
            {
                _id:1,
                clientId:1,
                propertyId: 1,
                bidDate: 1,
                bidPosition: 1
            }).lean()
        console.log("Property", BidsExist)

        if (BidsExist) {
            return res.json({
                message: `Property found`,
                Status_Reply: "Property found",
                BidList: BidsExist,
            })
        } else {
            return res.json({
                message: `Property not found`,
                Status_Reply: "Properties not found",
            })
        }

    } catch (error) {
        console.log("Please verify your details");
        return res.json({
            message: `Please verify your details`, error,
            Status_Reply: "Request fails"
        })
    }
})

module.exports = {
    getBidListbyClientId
}
