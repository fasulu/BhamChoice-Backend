const clientOtherHouseholdModel = require('../../Model/clientOtherHouseholdModel');

const getOneMember = (async (req, res) => {

    const memberId = req.params._id;

    console.log(memberId)

    try {
        const memberExist = await clientOtherHouseholdModel.findOne({_id: memberId}).select(
        {
            _id: 1,
            clientId: 1,
            clientOtherHousehold_relationshipWithClient: 1,
            clientOtherHousehold_assessmentPurposeOnly: 1,
            clientOtherHousehold_title: 1,
            clientOtherHousehold_firstname: 1,
            clientOtherHousehold_middlename: 1,
            clientOtherHousehold_surname: 1,
            clientOtherHousehold_namechange: 1,
            clientOtherHousehold_NINO: 1,
            clientOtherHousehold_dateofbirth: 1,
            clientOtherHousehold_sex: 1,
            clientOtherHousehold_live_with_you: 1,
            clientOtherHousehold_moved_to_current_address: 1,
            clientOtherHousehold_current_address: 1,
            clientOtherHousehold_is_she_pregnant: 1,
            clientOtherHousehold_spouse_another_member_name: 1,
            clientOtherHousehold_DeliveryDate: 1,
            clientOtherHousehold_telephone_home: 1,
            clientOtherHousehold_telephone_mobile: 1,
            clientOtherHousehold_telephone_work: 1,
            clientOtherHousehold_email: 1,
            clientOtherHousehold_illness: 1,
            clientOtherHousehold_are_you_work: 1,
            clientOtherHousehold_comments: 1

        }).lean()

    console.log("Member found", memberExist)
    return res.json({
            message: `Member found`,
            memberExist,
        })
    } catch (error) {
        console.log("Member not found");
    return res.json({
        message: `Member not found`,
        error
    })
    }
})

module.exports = {
    getOneMember
}