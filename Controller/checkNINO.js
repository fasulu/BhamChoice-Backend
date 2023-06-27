const clientModel = require('../Model/clientModel');
const clientJointModel = require('../Model/clientJointModel');
const clientOtherHouseholdModel = require('../Model/clientOtherHouseholdModel');


const checkClientNINOExist = (async (req, res) => {

    const clientNINO = req.params.nino.toLowerCase();

    console.log(clientNINO)

    const clientNINOExist = await clientModel.findOne({ client_NINO: clientNINO }).select(
        {
            _id: 1,
            client_NINO: 1
        }).lean()

    console.log(clientNINOExist)
    if (clientNINOExist) {

        console.log("NINO registerd");
        return res.json({
            message: `NINO registerd`,
            clientNINOExist,
            clientNINO: clientNINOExist.client_NINO,
            clientID: clientNINOExist._id
        })

    }
    console.log("NINO not registerd");
    return res.json({
        message: `NINO not registerd`
    })

})

const checkClientJointNINOExist = (async (req, res) => {

    const clientJointNINO = req.params.nino.toLowerCase();

    console.log(clientJointNINO)

    const clientJointNINOExist = await clientJointModel.findOne({ client_NINO: clientJointNINO }).select(
        {
            _id: 1,
            clientId: 1,
            clientJoint_NINO: 1
        }).lean()

    console.log(clientJointNINOExist)
    if (clientJointNINOExist) {

        console.log("Partner NINO registerd");
        return res.json({
            message: `01: Partner NINO registerd`,
            clientJointNINOExist,
        })

    }
    console.log("Partner NINO not registerd");
    return res.json({
        message: `02: Partner NINO not registerd`
    })

})

const checkClientOtherHouseholdNINOExist = (async (req, res, next) => {

    const clientOtherHouseholdNINO = req.params.nino;

    console.log(clientOtherHouseholdNINO)

    const clientOtherHouseholdNINOExist = await clientOtherHouseholdModel.findOne({ clientOtherHousehold_NINO: (clientOtherHouseholdNINO.toLowerCase()) }).select(
        {
            _id: 1,
            clientId: 1,
            clientOtherHousehold_NINO: 1
        }).lean()

    console.log(clientOtherHouseholdNINOExist)
    if (clientOtherHouseholdNINOExist) {

        console.log("Other Household member NINO registerd");
        return res.json({
            message: `01: Other Household member NINO registerd`,
            clientOtherHouseholdNINOExist,
        })

    }
    console.log("Other Household member NINO not registerd");
    return res.json({
        message: `02: Other Household member NINO not registerd`
    })

})

module.exports = {
    checkClientNINOExist,
    checkClientJointNINOExist,
    checkClientOtherHouseholdNINOExist
}