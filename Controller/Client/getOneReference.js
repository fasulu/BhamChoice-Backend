const clientReference = require('../../Model/clientReferenceModel');


const getOneReference = (async (req, res) => {

    const clientRef = req.params.reference;

    console.log(clientRef)

    try {
        const RefExist = await clientReference.findOne({ client_reference: clientRef }).select(
            {
                clientId: 1,
                client_reference: 1,
                client_password: 1,
                client_memorable_date: 1
            }).lean()

        if (RefExist.data) {
            return res.status(200).json({
                message: `Client reference found`,
                clientid: RefExist.clientId,
                clientRef: RefExist.client_reference,
                clientPwd: RefExist.client_password,
                clientDt: RefExist.client_memorable_date,

            })
        } else {
            return res.status(400).json({
                message: `Client not found`, error
            })
        }

    } catch (error) {
        console.log("Client not found");
        return res.status(400).json({
            message: `Client not found`, error
        })
    }
})

module.exports = {
    getOneReference
}