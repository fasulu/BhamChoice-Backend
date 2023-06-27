
const { validationResult } = require('express-validator');  // to process error results

const clientModel = require('../Model/clientModel')
const clientJointModel = require('../Model/clientJointModel');

const addClientJoint = (async (req, res) => {

    const errorVal = validationResult(req);

    const clientId = req.body.clientId
    const relationship = req.body.clientJoint_relationship;
    const title = req.body.clientJoint_title
    const firstname = req.body.clientJoint_firstname
    const middlename = req.body.clientJoint_middlename
    const surname = req.body.clientJoint_surname
    const namechange = req.body.clientJoint_namechange
    const jointNINO = req.body.clientJoint_NINO.toLowerCase()
    const dateofbirth = req.body.clientJoint_dateofbirth
    const sex = req.body.clientJoint_sex

    const lived_abroad = req.body.clientJoint_lived_abroad

    const live_with_you = req.body.clientJoint_current_live_with_you
    const livingin_different_address = req.body.clientJoint_livingin_different_address

    const moved_to_current_address = req.body.clientJoint_moved_to_current_address;

    const corres_postcode = req.body.clientJoint_corres_postcode
    const corres_address_line1 = req.body.clientJoint_corres_address_line1
    const corres_address_line2 = req.body.clientJoint_corres_address_line2
    const corres_address_line3 = req.body.clientJoint_corres_address_line3
    const corres_address_line4 = req.body.clientJoint_corres_address_line4

    const placed_by_local_authority = req.body.clientJoint_placed_by_local_authority
    const if_yes_local_authority = req.body.clientJoint_if_yes_local_authority

    const is_she_pregnant = req.body.clientJoint_is_she_pregnant
    const delivery_date = req.body.clientJoint_delivery_date

    const telephone_home = req.body.clientJoint_telephone_home
    const telephone_mobile = req.body.clientJoint_telephone_mobile
    const telephone_work = req.body.clientJoint_telephone_work
    const email = req.body.clientJoint_email

    const ethnicity = req.body.clientJoint_ethnicity
    const nationality = req.body.clientJoint_nationality
    const sex_orient = req.body.clientJoint_sex_orient
    const religion = req.body.clientJoint_religion
    const illness = req.body.clientJoint_illness

    const language_prefer = req.body.clientJoint_language_prefer
    const interpreter = req.body.clientJoint_interpreter

    const current_tenure = req.body.clientJoint_current_tenure;
    const current_tenure_BhamCouncilTenancyNum = req.body.clientJoint_current_tenure_bhamCouncilTenancyNum;

    const from_which_country = req.body.clientJoint_from_which_country;
    const are_you_worker = req.body.clientJoint_are_you_worker;

    const connection_to_birmingham = req.body.clientJoint_connection_to_birmingham
    const registration_date = req.body.clientJoint_registration_date
    const comments = req.body.clientJoint_comments

    try {
        if (errorVal.isEmpty()) {
            console.log("No Error during Validation....");

            console.log(
                clientId,
                relationship,
                title,
                firstname,
                middlename,
                surname,
                namechange,
                jointNINO,
                dateofbirth,
                sex,
                lived_abroad,
                live_with_you,
                livingin_different_address,
                moved_to_current_address,
                corres_postcode,
                corres_address_line1,
                corres_address_line2,
                corres_address_line3,
                corres_address_line4,
                placed_by_local_authority,
                if_yes_local_authority,
                is_she_pregnant,
                delivery_date,
                telephone_home,
                telephone_mobile,
                telephone_work,
                email,
                ethnicity,
                nationality,
                sex_orient,
                religion,
                illness,
                language_prefer,
                interpreter,
                current_tenure,
                current_tenure_BhamCouncilTenancyNum,
                from_which_country,
                are_you_worker,
                connection_to_birmingham,
                registration_date,
                comments
            )

            try {
                // check for the email already registered in clientJoint collection, duplicate email not allowed
                const clientPrimaryIDExist = await clientModel.findOne({ _id: clientId }).select(
                    {
                        _id: 1
                    }).lean()

                const clientPrimaryIDInJointExist = await clientJointModel.findOne({ clientId: clientId }).select(
                    {
                        clientId: 1
                    }).lean()

                console.log(`client primary id :- ${clientPrimaryIDExist._id}`)

                if ((clientPrimaryIDExist) && (clientPrimaryIDInJointExist)) {
                    res.json({
                        message: `${clientPrimaryIDExist}, You can not add duplicate`,
                        Status_Reply: 'You can not add duplicate',
                    })
                    
                } else if ((clientPrimaryIDExist) && (!clientPrimaryIDInJointExist)) {

                    // check for the email already registered in clientJoint collection, duplicate email not allowed
                    const clientJointEmailExist = await clientJointModel.findOne({ clientJoint_email: email }).select(
                        {
                            _id: 1,
                            clientJoint_email: 1
                        }).lean()

                    console.log(`client joint email :- ${clientJointEmailExist}`)

                    // check clientjoint nino already registed in clientjoint collection, duplicate nino not allowed
                    const clientJointNINOExist = await clientJointModel.findOne({ clientJoint_NINO: jointNINO }).select(
                        {
                            _id: 1,
                            clientJoint_NINO: 1
                        }).lean()

                    console.log(`client joint nino :- ${clientJointNINOExist}`)


                    // Condition :- any one of the following exist in clientJoint collection, do not add the given person as joint client
                    if ((clientJointEmailExist) || (clientJointNINOExist)) {

                        //Do not add joint applicant because of following reason
                        console.log(`Duplicate email/nino ${clientJointEmailExist}, ${clientJointNINOExist}`)

                        res.json({
                            message: `You can not add duplicate`,
                            Status_Reply: 'You can not add duplicate',
                        })
                    } else {
                        // add joint client in clientjoint collection

                        const clientJointAdded = await clientJointModel.create([
                            {
                                clientId: clientId,     // UNIQUE - should not add second joint applicant
                                clientJoint_relationship: relationship,
                                clientJoint_title: title,
                                clientJoint_firstname: firstname,
                                clientJoint_middlename: middlename,
                                clientJoint_surname: surname,
                                clientJoint_namechange: namechange,
                                clientJoint_NINO: jointNINO,    // UNIQUE***  - should not add duplicate nino number
                                clientJoint_dateofbirth: dateofbirth,
                                clientJoint_sex: sex,

                                clientJoint_lived_abroad: lived_abroad,

                                clientJoint_current_live_with_you: live_with_you,
                                clientJoint_livingin_different_address: livingin_different_address,

                                clientJoint_moved_to_current_address: moved_to_current_address,

                                clientJoint_corres_postcode: corres_postcode,
                                clientJoint_corres_address_line1: corres_address_line1,
                                clientJoint_corres_address_line2: corres_address_line2,
                                clientJoint_corres_address_line3: corres_address_line3,
                                clientJoint_corres_address_line4: corres_address_line4,

                                clientJoint_placed_by_local_authority: placed_by_local_authority,
                                clientJoint_if_yes_local_authority: if_yes_local_authority,

                                clientJoint_is_she_pregnant: is_she_pregnant,
                                clientJoint_delivery_date: delivery_date,

                                clientJoint_telephone_home: telephone_home,
                                clientJoint_telephone_mobile: telephone_mobile,
                                clientJoint_telephone_work: telephone_work,
                                clientJoint_email: email,   // UNIQUE***

                                clientJoint_ethnicity: ethnicity,
                                clientJoint_nationality: nationality,
                                clientJoint_sex_orient: sex_orient,
                                clientJoint_religion: religion,
                                clientJoint_illness: illness,

                                clientJoint_language_prefer: language_prefer,
                                clientJoint_interpreter: interpreter,

                                clientJoint_current_tenure: current_tenure,
                                clientJoint_current_tenure_bhamCouncilTenancyNum: current_tenure_BhamCouncilTenancyNum,

                                clientJoint_from_which_country: from_which_country,		// this field is mentioned as 'areyou' in frontend
                                clientJoint_are_you_worker: are_you_worker,
                                clientJoint_connection_to_birmingham: connection_to_birmingham,

                                clientJoint_registration_date: registration_date,
                                clientJoint_comments: comments
                            }])

                        return res.json({
                            message: `Joint applicant successfully added in joint applicant collection`,
                            Status_Reply: 'Joint applicant successfully added in joint applicant collection',
                            clientJointAdded
                        })
                    }
                } else {
                    return res.json({
                        message: `Invalid request`,
                        Status_Reply: 'Invalid request',
                    })
                }
            } catch (error) {
                return res.json({
                    message: `Primary applicant not exist`,
                    Status_Reply: 'Primary applicant not exist',
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
            message: `Unable to identify primary applicant`,
            Status_Reply: 'Unable to identify client/joint applicant or already exist',
            error
        })
    }
})

module.exports = {
    addClientJoint
}
