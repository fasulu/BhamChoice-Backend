const clientOtherHouseholdModel = require('../../Model/clientOtherHouseholdModel');

const getMemberList = (async (req, res) => {

    const members = req.body;

    console.log(members)

    try {
        const memberExist = await clientOtherHouseholdModel.find().select(
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
                clientOtherHousehold_Nameof_spouse: 1,
                clientOtherHousehold_DeliveryDate: 1,
                clientOtherHousehold_telephone_home: 1,
                clientOtherHousehold_telephone_mobile: 1,
                clientOtherHousehold_telephone_work: 1,
                clientOtherHousehold_email: 1,
                clientOtherHousehold_illness: 1,
                clientOtherHousehold_are_you_work: 1,
                clientOtherHousehold_comments: 1

            }).lean()

        console.log("Member list", memberExist)
        return res.json({
            message: `Member list found`,
            memberExist,
        })
    } catch (error) {
        console.log("Member list not found");
        return res.json({
            message: `Member list not found`,
            error
        })
    }
})

module.exports = {
    getMemberList
}