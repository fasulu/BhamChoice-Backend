const clientModel = require('../../Model/clientModel');

const getOneClient = (async (req, res) => {

    const clientId = req.params._id;

    console.log(clientId)

    try {
        const clientExist = await clientModel.findOne({ _id: clientId }).select(
            {
                _id: 1,
                client_title: 1,
                client_firstname: 1,
                client_middlename: 1,
                client_surname: 1,
                client_namechange: 1,
                client_NINO: 1,
                client_dateofbirth: 1,
                client_sex: 1,
                client_moved_to_current_address: 1,
                client_postcode: 1,
                client_address_line1: 1,
                client_address_line2: 1,
                client_address_line3: 1,
                client_address_line4: 1,
                client_is_rented_property: 1,
                client_landlord_name: 1,
                client_landlord_address: 1,
                client_landlord_tenancy_type: 1,
                client_landlord_info_about_this_address: 1,
                client_communication_address: 1,
                client_correspondence_type: 1,
                client_correspondence_postcode: 1,
                client_correspondence_address_line1: 1,
                client_correspondence_address_line2: 1,
                client_correspondence_address_line3: 1,
                client_correspondence_address_line4: 1,
                client_telephone_home: 1,
                client_telephone_mobile: 1,
                client_telephone_work: 1,
                client_email: 1,
                client_comments: 1
            }).lean()

        console.log("Client details", clientExist)
        return res.json({
            message: `Client found`,
            clientExist,
        })
    } catch (error) {
        console.log("Client not found");
        return res.json({
            message: `Client not found`,error
        })
    }
})

module.exports = {
    getOneClient
}