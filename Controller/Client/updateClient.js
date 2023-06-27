const clientModel = require('../../Model/clientModel');

const updateClient = (async (req, res) => {

    const clientId = req.params._id;

    const movedDate = req.body.client_moved_to_current_address

    const postcode = req.body.client_postcode
    const address_line1 = req.body.client_address_line1
    const address_line2 = req.body.client_address_line2
    const address_line3 = req.body.client_address_line3
    const address_line4 = req.body.client_address_line4
    
    const communication_address = req.body.client_communication_address
    const correspondence_type = req.body.client_correspondence_type
    const correspondence_postcode = req.body.client_correspondence_postcode
    const correspondence_address_line1 = req.body.client_correspondence_address_line1
    const correspondence_address_line2 = req.body.client_correspondence_address_line2
    const correspondence_address_line3 = req.body.client_correspondence_address_line3
    const correspondence_address_line4 = req.body.client_correspondence_address_line4
    
    const telephone_home = req.body.client_telephone_home
    const telephone_mobile = req.body.client_telephone_mobile
    const telephone_work = req.body.client_telephone_work
    const email = req.body.client_email
    
    const comments = req.body.client_comments

    console.log(clientId, movedDate,
        postcode,
        address_line1,
        address_line2,
        address_line3,
        address_line4,
        communication_address,
        correspondence_type,
        correspondence_postcode,
        correspondence_address_line1,
        correspondence_address_line2,
        correspondence_address_line3,
        correspondence_address_line4,
        telephone_home,
        telephone_mobile,
        telephone_work,
        email,
        comments)


    try {
        const clientExist = await clientModel.findOne({ _id: clientId }).lean()

        if (clientExist) {
            const updatedClientDetails = await clientModel.updateOne({ _id: clientId },
                {
                    "$set": {
                        "client_moved_to_current_address": movedDate,
                        "client_postcode": postcode,
                        "client_address_line1": address_line1,
                        "client_address_line2": address_line2,
                        "client_address_line3": address_line3,
                        "client_address_line4": address_line4,
                        "client_communication_address": communication_address,
                        "client_correspondence_type": correspondence_type,
                        "client_correspondence_postcode": correspondence_postcode,
                        "client_correspondence_address_line1": correspondence_address_line1,
                        "client_correspondence_address_line2": correspondence_address_line2,
                        "client_correspondence_address_line3": correspondence_address_line3,
                        "client_correspondence_address_line4": correspondence_address_line4,
                        "client_telephone_home": telephone_home,
                        "client_telephone_mobile": telephone_mobile,
                        "client_telephone_work": telephone_work,
                        "client_email": email,
                        "client_comments": comments
                    }
                }, { upsert: true }).lean()

            console.log("Client updated", updatedClientDetails)
            return res.json({
                message: `Client updated successfully`,
                Status_Reply: "Success",
                updatedClientDetails,
            })
        } else {
            console.log("Client not found");
            return res.json({
                message: `Client not found`, error
            })            
        }
    } catch (error) {
        console.log("Please verify your details");
        return res.json({
            message: `Please verify your details`, error
        })
    }
})

module.exports = {
    updateClient
}