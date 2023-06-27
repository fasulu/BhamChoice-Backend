const clientReference = require('../../Model/clientReferenceModel');

const getOneClientIdInClientRef = (async (req, res) => {

    const clientID = req.params.clientId;

    console.log(clientID)

    try {
        const idExist = await clientReference.findOne({ clientId: clientID }).select(
            {
                _id: 1,
                clientId: 1,
                client_reference: 1,
                client_password: 1,
                client_memorable_date: 1
            }).lean()

        return res.status(200).json({
            message: `Client reference found`,
            clientRef_id:idExist._id,
            clientid: idExist.clientId,
            clientRef: idExist.client_reference,
            clientPwd: idExist.client_password,
            clientDt: idExist.client_memorable_date,

        })
    } catch (error) {
        console.log("Client not found");
        return res.status(400).json({
            message: `Client not found`, error
        })
    }
})

module.exports = {
    getOneClientIdInClientRef
}