const propertyModel = require('../../Model/propertyModel');

const getPropertyById = (async (req, res) => {
    
    const id= req.params._id
    console.log(id)
    try {
        const propertyExist = await propertyModel.findOne({ _id: id }).select(            
            {
                propertyId: 1,
                advertType: 1,
                type: 1,
                address: 1,
                town: 1,
                postcode: 1,
                bedRoom: 1,
                bathRoom: 1,
                reception: 1,
                cTaxBand: 1,
                tenancyType: 1,
                availableFrom: 1,
                furnished: 1,
                parking: 1,
                garage: 1,
                garden: 1,
                patio: 1,
                floor: 1,
                kitchenFitted: 1,
                deposit: 1,
                fees: 1,
                rent: 1,
                pets: 1,
                imageUrl: 1,
                comments: 1,
                dateRecorded: 1

            }).lean()
        console.log("Property", propertyExist)

        if (propertyExist) {
            return res.json({
                message: `Property found`,
                Status_Reply: "Property found",
                PropertyList: propertyExist,
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
    getPropertyById
}
