const propertyModel = require('../../Model/propertyModel');

const getPropertyByPropertyId = (async (req, res) => {

    const propertyid = req.params.propertyId
    console.log(propertyid)
    try {
        const propertyExist = await propertyModel.findOne({ propertyId: propertyid }).select(
            {
                _id:1,
                propertyId:1,
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

        // const propertyExist = await propertyModel.findOne(
        //     {
        //         $or: [
        //             { "propertyId": { "$in": [propertyid] } },
        //             { "town": { "$in": [propertyid] } }
        //         ]
        //     }).select(
        //         {
        //             _id: 1,
        //             propertyId: 1,
        //             advertType: 1,
        //             type: 1,
        //             address: 1,
        //             town: 1,
        //             postcode: 1,
        //             bedRoom: 1,
        //             bathRoom: 1,
        //             reception: 1,
        //             cTaxBand: 1,
        //             tenancyType: 1,
        //             availableFrom: 1,
        //             furnished: 1,
        //             parking: 1,
        //             garage: 1,
        //             garden: 1,
        //             patio: 1,
        //             floor: 1,
        //             kitchenFitted: 1,
        //             deposit: 1,
        //             fees: 1,
        //             rent: 1,
        //             pets: 1,
        //             imageUrl: 1,
        //             comments: 1,
        //             dateRecorded: 1
        //         }).lean()

        console.log("Property", propertyExist)

        if (propertyExist) {
            return res.json({
                message: `Property found`,
                Status_Reply: "Success",
                PropertyInfo: propertyExist,
            })
        } else {
            return res.json({
                message: `Property not found`,
                Status_Reply: "Failed",
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
    getPropertyByPropertyId
}
