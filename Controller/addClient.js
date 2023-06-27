const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const clientModel = require('../Model/clientModel');

const addClient = (async (req, res) => {

    try {

        const password = "!As123456"
        const passwordHash = bcrypt.hashSync(password)

        await clientModel.insertMany([

            {
                client_title: "Mr",
                client_firstname: "manual",
                client_middlename: "-",
                client_surname: "macron",
                client_namechange: "No",
                client_NINO: "mm123456m",
                client_dateofbirth: "06/17/1955",
                client_sex: "Male",
                client_lived_abroad: "Yes",
                client_moved_to_current_address: "11/21/2009",
                client_postcode: "B55 8KK",
                client_address_line1: "15",
                client_address_line2: "holder Road",
                client_address_line3: "corporate building",
                client_address_line4: "Birmingham",
                client_is_rented_property: "Yes",
                client_landlord_name: "Currys",
                client_landlord_address: "76 Connecticut Road, New York WA23 456",
                client_landlord_tenancy_type: "Assured Shorthold Tenancy(AST)",
                client_landlord_info_about_this_address: "Unfurnished property",            
                client_communication_address: "Yes",
                client_correspondenceType: "work",
                client_correspondenceType: "work",
                client_correspondence_postcode: "ls12 4sd",
                client_correspondence_address_line1: "15 Ash Road",
                client_correspondence_address_line2: "kensington road",
                client_correspondence_address_line3: "london",
                client_correspondence_address_line4: "England",
                client_placed_by_local_authority: "Yes",
                client_if_yes_local_authority: "Birmingham city council",
                client_telephone_home: "02014561239",
                client_telephone_mobile: "07881234567",
                client_telephone_work: "02027985423",
                client_email: "client2@yahoo.com",
                client_ethnicity: "british",
                client_nationality: "British",
                client_sex_orient: "Hetrosexual or straight",
                client_religion: "christian",
                client_illness: "no",
                client_language_prefer: "English",
                client_interpreter: "No",
                client_current_tenure: "Birmingham city council tenant",
                client_current_tenure_TenancyRefNo: "mm45632178Lm",
                client_from_which_country: "A British Citizen",
                client_connection_to_birmingham: "None of the above",
                client_password: passwordHash,
                client_memorable_date: "12/30/2000",
                client_status: "active",
                client_comments: "None"
            }
        ])

        console.log("Primary client successfully registered");


    } catch (err) {
        console.log(err)
    }
})

module.exports = {addClient}