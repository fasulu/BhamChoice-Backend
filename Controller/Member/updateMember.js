const clientOtherHouseholdModel = require('../../Model/clientOtherHouseholdModel');

const updateMember = (async (req, res) => {

    const memberId = req.params._id;

    const live_with_you = req.body.clientOtherHousehold_live_with_you;
    const moved_to_current_address = req.body.clientOtherHousehold_moved_to_current_address;
    const current_address = req.body.clientOtherHousehold_current_address;
    const is_she_pregnant = req.body.clientOtherHousehold_is_she_pregnant;
    const Nameof_spouse = req.body.clientOtherHousehold_spouse_another_member_name;
    const DeliveryDate = req.body.clientOtherHousehold_DeliveryDate;
    const telephone_home = req.body.clientOtherHousehold_telephone_home;
    const telephone_mobile = req.body.clientOtherHousehold_telephone_mobile;
    const telephone_work = req.body.clientOtherHousehold_telephone_work;
    const email = req.body.clientOtherHousehold_email;
    const are_you_work = req.body.clientOtherHousehold_are_you_worker;
    const illness = req.body.clientOtherHousehold_illness;
    const comments = req.body.clientOtherHousehold_comments;

    console.log(memberId,
        live_with_you,
        moved_to_current_address,
        current_address,
        is_she_pregnant,
        Nameof_spouse,
        DeliveryDate,
        telephone_home,
        telephone_mobile,
        telephone_work,
        email,
        are_you_work,
        illness,
        comments);

    try {
        const memberExist = await clientOtherHouseholdModel.findOne({ _id: memberId }).lean()

        console.table(`line 39 ${memberExist}`);

        if (memberExist) {
            const updatedMemberDetails = await clientOtherHouseholdModel.updateOne({ _id: memberId },
                {
                    "$set": {

                        "clientOtherHousehold_live_with_you": live_with_you,
                        "clientOtherHousehold_moved_to_current_address": moved_to_current_address,
                        "clientOtherHousehold_current_address": current_address,
                        "clientOtherHousehold_is_she_pregnant": is_she_pregnant,
                        "clientOtherHousehold_spouse_another_member_name": Nameof_spouse,
                        "clientOtherHousehold_DeliveryDate": DeliveryDate,
                        "clientOtherHousehold_telephone_home": telephone_home,
                        "clientOtherHousehold_telephone_mobile": telephone_mobile,
                        "clientOtherHousehold_telephone_work": telephone_work,
                        "clientOtherHousehold_email": email,
                        "clientOtherHousehold_are_you_worker": are_you_work,
                        "clientOtherHousehold_illness": illness,
                        "clientOtherHousehold_comments": comments
                    }
                }, { upsert: true }).lean()

            console.log("Member updated successfully")
            return res.json({
                message: `Member updated successfully`,
                Status_Reply: 'Member updated successfully',
            })
        } else {
            console.log("Member not found");
            return res.json({
                message: `Member not found`,
                Status_Reply: 'Member not found',
                error
            })
        }
    }
    catch (error) {
        console.log("Member not found");
        return res.json({
            message: `Member not found`, 
            Status_Reply: 'Member not found',
            error
        })
    }
})

module.exports = {
    updateMember
}