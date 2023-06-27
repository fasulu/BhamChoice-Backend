
const { validationResult } = require('express-validator');  // to process error results

const clientOtherHouseholdModel = require('../../Model/clientOtherHouseholdModel');

const addClientMember = (async (req, res, next) => {

    const errorVal = validationResult(req);

    const clientId = req.body.clientId
    const relationship = req.body.clientOtherHousehold_relationshipWithClient
    const assessmentPurposeOnly = req.body.clientOtherHousehold_assessment_purpose_only
    const title = req.body.clientOtherHousehold_title
    const firstname = req.body.clientOtherHousehold_firstname
    const middlename = req.body.clientOtherHousehold_middlename
    const surname = req.body.clientOtherHousehold_surname
    const namechange = req.body.clientOtherHousehold_namechange
    const NINO = req.body.clientOtherHousehold_NINO.toLowerCase()
    const dateofbirth = req.body.clientOtherHousehold_dateofbirth
    const sex = req.body.clientOtherHousehold_sex

    const live_with_you = req.body.clientOtherHousehold_live_with_you
    const moved_to_current_address = req.body.clientOtherHousehold_moved_to_current_address

    const current_address = req.body.clientOtherHousehold_current_address;

    const placed_by_local_authority = req.body.clientOtherHousehold_placed_by_local_authority;
    const if_yes_local_authority = req.body.clientOtherHousehold_if_yes_local_authority;

    const is_she_pregnant = req.body.clientOtherHousehold_is_she_pregnant;
    const delivery_date = req.body.clientOtherHousehold_DeliveryDate;
    const spouse_another_member_name = req.body.clientOtherHousehold_spouse_another_member_name;

    const telephone_home = req.body.clientOtherHousehold_telephone_home;
    const telephone_mobile = req.body.clientOtherHousehold_telephone_mobile;
    const telephone_work = req.body.clientOtherHousehold_telephone_work;
    const email = req.body.clientOtherHousehold_email;

    const nationality = req.body.clientOtherHousehold_nationality;
    const sex_orient = req.body.clientOtherHousehold_sex_orient;
    const ethnicity = req.body.clientOtherHousehold_ethnicity;
    const religion = req.body.clientOtherHousehold_religion;
    const illness = req.body.clientOtherHousehold_illness

    const are_you_worker = req.body.clientOtherHousehold_are_you_worker;

    const registration_date = req.body.clientOtherHousehold_registration_date;
    const comments = req.body.clientOtherHousehold_comments;

    try {
        if (errorVal.isEmpty()) {
            console.log("No Error during Validation....");

            console.log("Data from frontend " +
                clientId,
                relationship,
                assessmentPurposeOnly,
                title,
                firstname,
                middlename,
                surname,
                namechange,
                NINO,
                dateofbirth,
                sex,
                live_with_you,
                moved_to_current_address,
                current_address,
                placed_by_local_authority,
                if_yes_local_authority,
                is_she_pregnant,
                delivery_date,
                spouse_another_member_name,
                telephone_home,
                telephone_mobile,
                telephone_work,
                email,
                nationality,
                sex_orient,
                ethnicity,
                religion,
                illness,
                are_you_worker,
                registration_date,
                comments
            )

            try {

                const memberEmailExist = await clientOtherHouseholdModel.findOne({ clientOtherHousehold_email: email }).select(
                    {
                        _id: 1,
                        clientOtherHousehold_email: 1
                    }).lean()
                console.log(memberEmailExist)

                const memberNINOExist = await clientOtherHouseholdModel.findOne({ clientOtherHousehold_NINO: NINO }).select(
                    {
                        _id: 1,
                        clientOtherHousehold_NINO: 1
                    }).lean()
                console.log(memberNINOExist)

                // check Household member nino and email already registered in clientOtherHousehold colloction

                if ((!NINO == "") || (!email == "")) {
                    if ((memberEmailExist) || (memberNINOExist)) {

                        //Do not add joint applicant because of following reason
                        console.log(`Duplicate email/nino ${memberNINOExist}, ${memberEmailExist}`)

                        return res.json({
                            message: `You can not add duplicate`,
                            Status_Reply: 'You can not add duplicate',
                        })
                    }
                } else {

                    // add client OtherHousehold members in clientOtherHousehold collection

                    const clientOtherHouseholdAdded = await clientOtherHouseholdModel.create([
                        {
                            clientId: clientId,
                            clientOtherHousehold_relationshipWithClient: relationship,
                            clientOtherHousehold_assessment_purpose_only: assessmentPurposeOnly,
                            clientOtherHousehold_title: title,
                            clientOtherHousehold_firstname: firstname,
                            clientOtherHousehold_middlename: middlename,
                            clientOtherHousehold_surname: surname,
                            clientOtherHousehold_namechange: namechange,
                            clientOtherHousehold_NINO: NINO,
                            clientOtherHousehold_dateofbirth: dateofbirth,
                            clientOtherHousehold_sex: sex,
                            clientOtherHousehold_live_with_you: live_with_you,
                            clientOtherHousehold_moved_to_current_address: moved_to_current_address,
                            clientOtherHousehold_current_address: current_address,
                            clientOtherHousehold_placed_by_local_authority: placed_by_local_authority,
                            clientOtherHousehold_if_yes_local_authority: if_yes_local_authority,
                            clientOtherHousehold_is_she_pregnant: is_she_pregnant,
                            clientOtherHousehold_DeliveryDate: delivery_date,
                            clientOtherHousehold_spouse_another_member_name: spouse_another_member_name,
                            clientOtherHousehold_telephone_home: telephone_home,
                            clientOtherHousehold_telephone_mobile: telephone_mobile,
                            clientOtherHousehold_telephone_work: telephone_work,
                            clientOtherHousehold_email: email,
                            clientOtherHousehold_nationality: nationality,
                            clientOtherHousehold_sex_orient: sex_orient,
                            clientOtherHousehold_ethnicity: ethnicity,
                            clientOtherHousehold_religion: religion,
                            clientOtherHousehold_illness: illness,
                            clientOtherHousehold_are_you_worker: are_you_worker,
                            clientOtherHousehold_registration_date: registration_date,
                            clientOtherHousehold_comments: comments
                        }])
                    console.log(clientOtherHouseholdAdded)
                    return res.json({
                        message: `Household member added successfully`,
                        Status_Reply: 'Household member added successfully',
                    })
                }

            } catch (error) {
                return res.json({
                    message: `Unable to proceed on your request`,
                    Status_Reply: 'Unable to proceed on your request',
                    error
                })
            }

        } else {
            const extractedErrors = []
            errorVal.errors.map(err => extractedErrors.push({ [err.param]: err.msg }));
            console.log("Please verify the details", extractedErrors);
            console.log(errorVal.errors[0].param)
            return res.json({
                message: `Please verify the details`,
                Status_Reply: 'Please verify the details',
                extractedErrors
            })
        }
    } catch (error) {
        return res.json({
            message: `Unable to identify primary applicant`, error
        })
    }


})

const checkClientNINOExist = async (nino) => {

    console.log(nino)
    const clientNINOExist = await clientModel.findOne({ client_NINO: nino }).lean()    // check whether the user email is already registered 

    if (clientNINOExist) {

        console.log("NINO registerd");
        return clientNINOExist._id

    } else {
        console.log("NINO registerd");

        return false
    }
}

// const checkClientNINOExist = async (nino) => {

//     const clientNINOExist = await clientModel.findOne({ client_NINO: nino }).lean()    // check whether the user email is already registered 

//     if (!clientNINOExist) {

//         console.log("NINO not registerd");
//         return res.json({
//             message: `02: : ${nino} not registered`
//         })

//     } else {
//         console.log("NINO registerd");
//         console.log(clientNINOExist._id)

//         const clientJoint_NINOExist = await clientJointModel.findOne({ clientJoint_NINO: nino }).lean()    // check whether the user email is already registered 

//         return res.json({
//             message: `02: : ${nino} registered`,
//             clientJoint_NINOExist
//         })
//     }
// }

module.exports = {
    addClientMember
}
