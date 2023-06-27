const clientJointModel = require('../../Model/clientJointModel');

const updateJoint = (async (req, res) => {

    const jointId = req.params._id;
    // const jointId = "6401e0af1cf597e77c0e209e";
    const currently_livewithyou = req.body.clientJoint_current_live_with_you
    const living_in_diff_address = req.body.clientJoint_livingin_different_address
    const moved_to_current_address = req.body.clientJoint_moved_to_current_address
    const corres_postcode = req.body.clientJoint_corres_postcode
    const corres_address_line1 = req.body.clientJoint_corres_address_line1
    const corres_address_line2 = req.body.clientJoint_corres_address_line2
    const corres_address_line3 = req.body.clientJoint_corres_address_line3
    const corres_address_line4 = req.body.clientJoint_corres_address_line4
    const is_she_pregnant = req.body.clientJoint_is_she_pregnant
    const delivery_date = req.body.clientJoint_delivery_date
    const illness = req.body.clientJoint_illness
    const are_you_worker = req.body.clientJoint_are_you_worker
    const telephone_home = req.body.clientJoint_telephone_home
    const telephone_mobile = req.body.clientJoint_telephone_mobile
    const telephone_work = req.body.clientJoint_telephone_work
    const email = req.body.clientJoint_email
    const comments = req.body.clientJoint_comments

    console.log("joint id from frontend", jointId,
        moved_to_current_address,
        currently_livewithyou,
        living_in_diff_address,
        corres_postcode,
        corres_address_line1,
        corres_address_line2,
        corres_address_line3,
        corres_address_line4,
        is_she_pregnant,
        delivery_date,
        telephone_home,
        telephone_mobile,
        telephone_work,
        email,
        illness,
        are_you_worker,
        comments)

    try {
        const jointExist = await clientJointModel.findOne({ _id: jointId }).lean()

        if (jointExist) {
            const updatedJointDetails = await clientJointModel.updateOne({ _id: jointId },
                {
                    "$set": {
                        "clientJoint_moved_to_current_address": moved_to_current_address,
                        "clientJoint_current_live_with_you": currently_livewithyou,
                        "clientJoint_livingin_different_address": living_in_diff_address,
                        "clientJoint_corres_postcode": corres_postcode,
                        "clientJoint_corres_address_line1": corres_address_line1,
                        "clientJoint_corres_address_line2": corres_address_line2,
                        "clientJoint_corres_address_line3": corres_address_line3,
                        "clientJoint_corres_address_line4": corres_address_line4,
                        "clientJoint_is_she_pregnant": is_she_pregnant,
                        "clientJoint_delivery_date": delivery_date,
                        "clientJoint_telephone_home": telephone_home,
                        "clientJoint_telephone_mobile": telephone_mobile,
                        "clientJoint_telephone_work": telephone_work,
                        "clientJoint_email": email,
                        "clientJoint_illness": illness,
                        "clientJoint_are_you_worker": are_you_worker,
                        "clientJoint_comments": comments
                    }
                }, { upsert: true }).lean()

            console.log("Joint/Partner updated", updatedJointDetails)
            return res.json({
                message: `Joint/Partner updated`,
                Status_Reply: 'Joint/Partner updated',
                updatedJointDetails,
            })
        } else {
            console.log("Joint/Partner not found");
            return res.json({
                message: `Joint/Partner not found`, 
                Status_Reply: 'Joint/Partner not found',
                error
            })
        }
    } catch (error) {
        console.log("Joint/Partner not found");
        return res.json({
            message: `Joint/Partner not found`, 
            Status_Reply: 'Joint/Partner not found',
            error
        })
    }
})

module.exports = {
    updateJoint
}