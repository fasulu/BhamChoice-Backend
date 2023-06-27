const clientModel = require('../../Model/clientModel');

const getClientList = (async (req, res) => {

    const clients = req.body;

    console.log(clients)

    try {
        const clientExist = await clientModel.find().select(
            {
                _id: 1,
                client_title: 1,
                client_firstname: 1,
                client_middlename: 1,
                client_surname: 1,
                client_NINO: 1,
                client_dateofbirth: 1,
                client_sex: 1,
                client_telephone_home: 1,
                client_telephone_mobile: 1,
                client_telephone_work: 1,
                client_email: 1

            }).lean()

        console.log("Client list", clientExist);
        return res.json({
            message: `Client list found`,
            clientExist,
        })
    } catch (error) {
        console.log("Client ist not found");
        return res.json({
            message: `Client list not found`
        })
    }
})

module.exports = {
    getClientList
}