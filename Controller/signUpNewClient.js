const express = require('express');

const { validationResult } = require('express-validator');  // to process error results

const bcrypt = require('bcryptjs');     // to crypt sensible datas

const clientModel = require('../Model/clientModel');

const signUpNewClient = (async (req, res, next) => {

    const clientStatus = "active";

    const errorVal = validationResult(req);

    if (!errorVal.isEmpty()) {

        console.log("Error during Validation");
        return res.json({ errors: errorVal.array() });
    } else {
        console.log("No Error during Validation");
    }

    const title = req.body.client_title
    const firstname = req.body.client_firstname
    const middlename = req.body.client_middlename
    const surname = req.body.client_surname
    const namechange = req.body.client_namechange
    const NINO = req.body.client_NINO.toLowerCase()
    const dateofbirth = req.body.client_dateofbirth
    const sex = req.body.client_sex
    const lived_abroad = req.body.client_lived_abroad
    const from_which_country = req.body.client_from_which_country
    const postcode = req.body.client_postcode
    const address_line1 = req.body.client_address_line1
    const address_line2 = req.body.client_address_line2
    const address_line3 = req.body.client_address_line3
    const address_line4 = req.body.client_address_line4
    const moved_to_current_address = req.body.client_moved_to_current_address

    const is_rented_property = req.body.client_is_rented_property
    const landlord_name = req.body.client_landlord_name
    const landlord_address = req.body.client_landlord_address
    const landlord_tenancy_type = req.body.client_landlord_tenancy_type
    const landlord_info_about_this_address = req.body.client_landlord_info_about_this_address

    const communication_address = req.body.client_communication_address
    const correspondence_type = req.body.client_correspondence_type
    const correspondence_postcode = req.body.client_correspondence_postcode
    const correspondence_address_line1 = req.body.client_correspondence_address_line1
    const correspondence_address_line2 = req.body.client_correspondence_address_line2
    const correspondence_address_line3 = req.body.client_correspondence_address_line3
    const correspondence_address_line4 = req.body.client_correspondence_address_line4

    const placed_by_local_authority = req.body.client_placed_by_local_authority
    const if_yes_local_authority = req.body.client_if_yes_local_authority

    const telephone_home = req.body.client_telephone_home
    const telephone_mobile = req.body.client_telephone_mobile
    const telephone_work = req.body.client_telephone_work
    const email = req.body.client_email

    const ethnicity = req.body.client_ethnicity
    const nationality = req.body.client_nationality
    const sex_orient = req.body.client_sex_orient
    const religion = req.body.client_religion
    const illness = req.body.client_illness

    const language_prefer = req.body.client_language_prefer
    const interpreter = req.body.client_interpreter

    const current_tenure = req.body.client_current_tenure
    const current_tenure_TenancyRefNo = req.body.client_current_tenure_bhamCouncilTenancyNum

    const connection_to_birmingham = req.body.client_connection_to_birmingham

    // const password = req.body.client_password
    // const memorable_date = req.body.client_memorable_date

    const registration_date = req.body.client_registration_date
    const status = clientStatus

    const comments = req.body.client_comments

    console.log(title,
        firstname,
        middlename,
        surname,
        namechange,
        NINO,
        dateofbirth,
        sex,
        email,
        lived_abroad,
        from_which_country,
        postcode,
        address_line1,
        address_line2,
        address_line3,
        address_line4,
        moved_to_current_address,
        is_rented_property,
        landlord_name,
        landlord_address,
        landlord_tenancy_type,
        landlord_info_about_this_address,
        communication_address,
        correspondence_type,
        correspondence_postcode,
        correspondence_address_line1,
        correspondence_address_line2,
        correspondence_address_line3,
        correspondence_address_line4,
        placed_by_local_authority,
        if_yes_local_authority,
        telephone_home,
        telephone_mobile,
        telephone_work,
        ethnicity,
        nationality,
        sex_orient,
        religion,
        illness,
        language_prefer,
        interpreter,
        current_tenure,
        current_tenure_TenancyRefNo,
        connection_to_birmingham,
        // password,
        // memorable_date,
        registration_date,
        status,
        comments
    )

    if (errorVal.isEmpty()) {
        console.log("No Error during Validation");

        const clientEmailExist = await clientModel.findOne({ client_email: email }).lean()    // check whether the user email is already registered 
        const clientNINOExist = await clientModel.findOne({ client_NINO: NINO }).lean()    // check whether the user email is already registered 

        if ((!clientNINOExist) || (!clientEmailExist)) {
            try {

                const passwordHashed = bcrypt.hashSync(password)       // crypts given password in to Bearer Token

                console.log(passwordHashed);

                // create new document in client collection
                const clientAdded = await clientModel.create([
                    {
                        client_title: title,
                        client_firstname: firstname,
                        client_middlename: middlename,
                        client_surname: surname,
                        client_namechange: namechange,
                        client_NINO: NINO,                      // UNIQUE***
                        client_dateofbirth: dateofbirth,
                        client_sex: sex,
                        client_lived_abroad: lived_abroad,
                        client_from_which_country: from_which_country,
                        client_postcode: postcode,
                        client_address_line1: address_line1,
                        client_address_line2: address_line2,
                        client_address_line3: address_line3,
                        client_address_line4: address_line4,
                        client_moved_to_current_address: moved_to_current_address,
                        client_is_rented_property: is_rented_property,
                        client_landlord_name: landlord_name,
                        client_landlord_address: landlord_address,
                        client_landlord_tenancy_type: landlord_tenancy_type,
                        client_landlord_info_about_this_address: landlord_info_about_this_address,
                        client_communication_address: communication_address,
                        client_correspondence_type: correspondence_type,
                        client_correspondence_postcode: correspondence_postcode,
                        client_correspondence_address_line1: correspondence_address_line1,
                        client_correspondence_address_line2: correspondence_address_line2,
                        client_correspondence_address_line3: correspondence_address_line3,
                        client_correspondence_address_line4: correspondence_address_line4,
                        client_placed_by_local_authority: placed_by_local_authority,
                        client_if_yes_local_authority: if_yes_local_authority,
                        client_telephone_home: telephone_home,
                        client_telephone_mobile: telephone_mobile,
                        client_telephone_work: telephone_work,
                        client_email: email,                        // UNIQUE***
                        client_ethnicity: ethnicity,
                        client_nationality: nationality,
                        client_sex_orient: sex_orient,
                        client_religion: religion,
                        client_illness: illness,
                        client_language_prefer: language_prefer,
                        client_interpreter: interpreter,
                        client_current_tenure: current_tenure,
                        client_current_tenure_bhamCouncilTenancyNum: current_tenure_TenancyRefNo,
                        client_connection_to_birmingham: connection_to_birmingham,
                        // client_password: passwordHashed,
                        // client_memorable_date: memorable_date,
                        client_registration_date: registration_date,
                        client_status: status,
                        client_comments: comments
                    }])

                return res.json({
                    message: "Primary applicant added successfully",
                    status: "Success",
                    ClientAdded:clientAdded._id
                })
            } catch (error) {

                return res.json({
                    message: `01: ${email} or ${NINO} already registered`, error,
                    clientEmailExist,
                    clientNINOExist
                })
            }
        } else {
            console.log("Email/NINO already registerd");
            return res.json({
                message: `02: : ${email} or ${NINO} already registered`
            })
        }

    } else {
        console.log("Please verify the details");
        return res.json({
            message: `03: Please verify the details, ${email} or ${NINO} duplicate entry`
        })
    }
})

module.exports = {
    signUpNewClient
}
