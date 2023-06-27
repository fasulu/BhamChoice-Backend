
const { validationResult } = require('express-validator');  // to process error results

const propertyModel = require('../../Model/propertyModel')

const GuestSearch = (async (req, res) => {

    const searchArea = req.body.searchArea;
    const socialCheck = req.body.socialHousing;
    const affordableCheck = req.body.affordableRent;
    const bungalowCheck = req.body.bungalow;
    const flatCheck = req.body.flat;
    const houseCheck = req.body.house;
    const maisonetteCheck = req.body.maisonette;
    const otherCheck = req.body.other;
    const oneBedCheck = req.body.oneBed;
    const twoBedCheck = req.body.twoBed;
    const threeBedCheck = req.body.threeBed;
    const fourBedCheck = req.body.fourBed;
    const fiveBedCheck = req.body.fiveBed;
    const sixBedCheck = req.body.sixBed;
    const sevenBedCheck = req.body.sevenBed;
    const eightBedCheck = req.body.eightBed;
    const nineBedCheck = req.body.nineBed;
    const tenBedCheck = req.body.tenBed;

    console.log("Data from frontend ", searchArea, socialCheck, affordableCheck, bungalowCheck, flatCheck, houseCheck, maisonetteCheck, otherCheck, oneBedCheck, twoBedCheck, threeBedCheck, fourBedCheck, fiveBedCheck, sixBedCheck, sevenBedCheck, eightBedCheck, nineBedCheck, tenBedCheck);


    var queryMaker = '';
    var advertType = "";
    var type = "";
    var bedRoom = 0;

    if (socialCheck) { advertType = socialCheck + "," };
    if (affordableCheck) { advertType = advertType + affordableCheck };

    if (bungalowCheck) { type = bungalowCheck + "," };
    if (flatCheck) { type = type + flatCheck + "," };
    if (houseCheck) { type = type + houseCheck + "," };
    if (maisonetteCheck) { type = type + maisonetteCheck + "," };
    if (otherCheck) { type = type + otherCheck };

    if (oneBedCheck) { bedRoom = `${oneBedCheck},` }
    if (twoBedCheck) { bedRoom = `${bedRoom}${twoBedCheck},` }
    if (threeBedCheck) { bedRoom = `${bedRoom}${threeBedCheck},` }
    if (fourBedCheck) { bedRoom = `${bedRoom}${fourBedCheck},` }
    if (fiveBedCheck) { bedRoom = `${bedRoom}${fiveBedCheck},` }
    if (sixBedCheck) { bedRoom = `${bedRoom}${sixBedCheck},` }
    if (sevenBedCheck) { bedRoom = `${bedRoom}${sevenBedCheck},` }
    if (eightBedCheck) { bedRoom = `${bedRoom}${eightBedCheck},` }
    if (nineBedCheck) { bedRoom = `${bedRoom}${nineBedCheck},` }
    if (tenBedCheck) { bedRoom = `${bedRoom}${tenBedCheck}` }

    console.log(`advertType contains:- ${advertType}`)
    console.log(`type contains:- ${type}`)
    console.log(`bedroom contains:- ${bedRoom}`, typeof bedRoom)
    console.log(`searchArea contains:- ${searchArea}`)


    try {
        if ((!type) || (!bedRoom) || (!advertType)) {

            const propertyInArea = await propertyModel.find(
                {
                    town: { $in: [searchArea] }
                }).select(
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
                        comments: 1
                    }
                )
            console.log(`propertyId ${propertyInArea}`)

            if (propertyInArea.length > 0) {
                return res.json({
                    message: `Property found`,
                    Status_Reply: "Success",
                    PropertyList: propertyInArea,
                })
            } else {
                console.log("Property Information ", propertyInArea)
                return res.json({
                    message: `Property not found`,
                    Status_Reply: "Check you request or property not found",
                    PropertyList: propertyInArea,
                })
            }

        } else {

            const propertyExist = await propertyModel.find(
                {
                    town: { $in: [searchArea] },
                    advertType: { $in: [socialCheck, affordableCheck] },
                    type: { $in: [bungalowCheck, flatCheck, houseCheck, maisonetteCheck, otherCheck] },
                    bedRoom: { $in: [oneBedCheck, twoBedCheck, threeBedCheck, fourBedCheck, fiveBedCheck, sixBedCheck, sevenBedCheck, eightBedCheck, nineBedCheck, tenBedCheck,] }
                }).select(
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
                        comments: 1
                    }
                )
            console.log(`propertyId ${propertyExist}`);

            if (propertyExist.length > 0) {
                return res.json({
                    message: `Property found`,
                    Status_Reply: "Success",
                    PropertyList: propertyExist,
                })
            } else {
                console.log("Property Information ", propertyExist)
                return res.json({
                    message: `Property not found`,
                    Status_Reply: "Check you request or property not found",
                    PropertyList: propertyExist,
                })
            }
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
    GuestSearch
}
