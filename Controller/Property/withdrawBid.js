const bidModel = require('../../Model/bidModel');

const withdrawBid = (async (req, res) => {
    
    const propertyid = req.params.propertyId;
    console.log(propertyid)

    if (propertyid) {
        try {
            const bidExist = await bidModel.findOne({propertyId: propertyid}).select(
                {_id:1}
            ).lean()

            if(!bidExist){
                res.json({
                    message: `Property Id not found`,
                    Status_Reply: "Property Id not found",
                    error
                })
            } else {
                console.log(bidExist)
                
                const bidDeleted = await bidModel.findByIdAndDelete({ _id: bidExist._id }).exec()

                res.json({
                    message: "Current bid withdrawn successfully",
                    Status_Reply: "Current bid withdrawn successfully",
                    BidRemoved:bidDeleted
                })
            }

        } catch (error) {

            res.json({
                message: "Unknown information",
                Status_Reply: "Unknown information",
                error
            })
        }
    } else {
        console.log("Insufficient information");
        
        return res.json({
            message: `Insufficient information`,
            Status_Reply: "Insufficient information",
        })
    }

})

module.exports = { withdrawBid }