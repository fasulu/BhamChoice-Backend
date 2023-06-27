const clientModel = require('../Model/clientModel');
const clientJointModel = require('../Model/clientJointModel');
// const clientOtherHouseholdModel = require('../Model/clientOtherHouseholdModel');


const checkClientEmailExist = (async (req, res) => {

    const clientEmail = req.params.email.toLowerCase();

    console.log(`line 10 ${clientEmail}`)

    const clientEmailExist = await clientModel.findOne({ client_email: clientEmail }).select(
        {
            _id: 1,
            client_email: 1
        }).lean()

    console.log(clientEmailExist)
    if (clientEmailExist) {

        console.log("Client Email registerd");
        return res.json({
            message: `01: Client Email registerd`, 
            clientEmailExist,
        }) 

    }
    console.log("Client Email not registerd");
    return res.json({
        message: `02: Client Email not registerd`
    })

})

const checkClientJointEmailExist = (async (req, res) => {

    const clientJointEmail = req.params.email.toLowerCase();

    console.log(clientJointEmail)

    const clientJointEmailExist = await clientJointModel.findOne({ clientJoint_email: clientJointEmail }).select(
        {
            _id: 1,
            clientId: 1,
            clientJoint_email: 1
        }).lean()

    console.log(clientJointEmailExist)
    if (clientJointEmailExist) {

        console.log("Partner Email registerd");
        return res.json({
            message: `01: Partner Email registerd`, 
            clientJointEmailExist,
        }) 

    }
    console.log("Partner Email not registerd");
    return res.json({
        message: `02: Partner Email not registerd`
    })

})

module.exports = {
    checkClientEmailExist,
    checkClientJointEmailExist
}