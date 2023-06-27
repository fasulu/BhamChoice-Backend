const clientOtherHouseholdModel = require('../../Model/clientOtherHouseholdModel');

const getClientIDInMember = (async (req, res) => {

    const clientId = req.params.clientId;

    console.log(clientId)
    
    try {
        const clientIdExist = await clientOtherHouseholdModel.find({ clientId: clientId }).select(
            {
                _id: 1,
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

        console.log("Primary Applicant exist in Member collection", clientIdExist)
        return res.status(200).json({
            message: `Primary Applicant exist in Member collection`,
            memberList:clientIdExist,
        })
    } catch (error) {
        console.log("Primary Applicant not exist");
        return res.status(400).json({
            message: `Primary Applicant not exist`,
            error
        })
    }
})

module.exports = {
    getClientIDInMember
}