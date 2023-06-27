const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// const userModel = require('./Model/userModel');
const clientJointModel = require('./Model/clientJointModel');
const clientModel = require('./Model/clientModel');
const clientReference = require('./Model/clientReference');
const clientOtherHouseholdModel = require('./Model/clientOtherHouseholdModel');
const languageModel = require('./Model/languageModel');
const tenureModel = require('./Model/tenureModel');
const beliefModel = require('./Model/beliefModelModel');
const sexOrientModel = require('./Model/sexOrientModel');
const nationalityModel = require('./Model/nationalityModel');
const ethnicityModel = require('./Model/ethnicityModel');
const correspondenceModel = require('./Model/correspondenceModel');
const tenancyModel = require('./Model/tenancyModel');
const areYouModel = require('./Model/areYouModel');


// connect to database

mongoose.set('strictQuery', true);

mongoose.connect("mongodb://localhost:27017/bham-choice", { useNewUrlParser: true }, { useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("I'm connected to the database")
    }
})

// create user collection 
// const addUser = async () => {

//     const password = "!As123456"
//     const passwordHash = bcrypt.hashSync(password)

//     try {

//         await userModel.deleteMany({}).lean()

//         await userModel.insertMany([

//             {
//                 email: "client1@msn.com",
//                 password: passwordHash,
//                 status: "inactive"

//             }
//         ])

//         console.log("The collection of User has been recreated in the database");

//     } catch (err) {
//         console.log(err)
//     }
// }

// create client collection

const addClient = async () => {

    try {

        const password = "!As123456"
        const passwordHash = bcrypt.hashSync(password)

        await clientModel.deleteMany({}).lean()

        await clientModel.insertMany([

            {
                client_title: "Mr",
                client_firstname: "Boris",
                client_middlename: "-",
                client_surname: "Smith",
                client_namechange: "No",
                client_NINO: "sg535352a",
                client_dateofbirth: "05/15/2000",
                client_sex: "Male",

                client_lived_abroad: "Yes",
                client_moved_to_current_address: "10/23/2009",

                client_postcode: "B91 2NJ",
                client_address_line1: "125",
                client_address_line2: "Bevel Road",
                client_address_line3: "Tenant House",
                client_address_line4: "Birmingham",

                client_is_rented_property: "Yes",
                client_landlord_name: "Black White",
                client_landlord_address: "456 Connect Road, Birmingham B1 5ZZ",
                client_landlord_tenancy_type: "Assured Shorthold Tenancy(AST)",
                client_landlord_info_about_this_address: "Unfurnished property",

                client_communication_address: "correspondence address",
                client_correspondenceType: "work",
                client_correspondence_postcode: "B1 2JJ",
                client_correspondence_address_line1: "12 Jewel Road",
                client_correspondence_address_line2: "Jewellery Quarter",
                client_correspondence_address_line3: "Birmingham",
                client_correspondence_address_line4: "West Midland-",

                client_placed_by_local_authority: "Yes",
                client_if_yes_local_authority: "Birmingham city council",

                client_telephone_home: "01214561236",
                client_telephone_mobile: "07991234567",
                client_telephone_work: "02027854123",
                client_email: "client1@yahoo.com",

                client_ethnicity: "British",
                client_nationality: "British",
                client_sex_orient: "Hetrosexual or straight",
                client_religion: "Jewish",
                client_illness: "Knee problem",

                client_language_prefer: "English",
                client_interpreter: "No",

                client_current_tenure: "Birmingham city council tenant",
                client_current_tenure_TenancyRefNo: "AD45632178LX",

                client_from_which_country: "A British Citizen", // this field is mentioned as 'areyou' in frontend
                client_connection_to_birmingham: "None of the above",

                client_password: passwordHash,
                client_memorable_date: "12/30/2000",
                client_registration_date: new Date(),
                client_status: "inactive",
                client_comments: "None"
            }
        ])

        console.log("The collection of Client has been recreated in the database");


    } catch (err) {
        console.log(err)
    }
}

// create clientJoint collection

const addClientJoint = async () => {

    try {
        const defaultUser = "client1@msn.com";    // user registered email

        const clientID = await clientModel.findOne({ email: defaultUser }).lean()     // take commune id to save in with user collection

        await clientJointModel.deleteMany({}).lean()

        await clientJointModel.insertMany([

            {
                clientId: clientID._id,
                clientJoint_relationship: "wife",
                clientJoint_title: "Mrs",
                clientJoint_firstname: "Amenda",
                clientJoint_middlename: "-",
                clientJoint_surname: "Smith",
                clientJoint_namechange: "No",
                clientJoint_NINO: "sz651278z",
                clientJoint_dateofbirth: "10/30/2006",
                clientJoint_sex: "Female",

                clientJoint_lived_abroad: "No",

                clientJoint_current_live_with_you: "yes",
                clientJoint_livingin_different_address: "Yes", // old name -- clientJoint_communication_address

                clientJoint_moved_to_current_address: "10-29-2021",

                clientJoint_corres_postcode: "B29 1AB",
                clientJoint_corres_address_line1: "12 Rafale Road",
                clientJoint_corres_address_line2: "Selly Oak",
                clientJoint_corres_address_line3: "Birmingham",
                clientJoint_corres_address_line4: "-",

                clientJoint_placed_by_local_authority: "yes",
                clientJoint_if_yes_local_authority: "birmingham city council",

                clientJoint_is_she_pregnant: "yes",
                clientJoint_delivery_date: "10-29-20024",

                clientJoint_telephone_home: "01214561236",
                clientJoint_telephone_mobile: "07972351254",
                clientJoint_telephone_work: "01218957412",
                clientJoint_email: "jointclient1@gmail.com",

                clientJoint_ethnicity: "British",
                clientJoint_nationality: "British",
                clientJoint_sex_orient: "Hetrosexual or straight",
                clientJoint_religion: "Christian",
                clientJoint_illness: "No",

                clientJoint_language_prefer: "English",
                clientJoint_interpreter: "No",

                clientJoint_current_tenure: "birmingham city council",
                clientJoint_current_tenure_bhamCouncilTenancyNum: "45trefg67",

                clientJoint_from_which_country: "A British citizen",
                clientJoint_are_you_worker: "yes",
                clientJoint_connection_to_birmingham: "None of the above",

                clientJoint_registration_date: new Date(),
                clientJoint_comments: "None"
            }
        ])

        console.log("The collection of ClientJoint has been recreated in the database");


    } catch (err) {
        console.log(err)
    }
}

const createClientRef = async () => {

    // create new reference number based on first and surname with random number
    const firstname = 'Boris';
    const surname = 'Smith';
    const min = 28579;
    const max = 96765;
    const rand = min + Math.random() * (max - min);
    const loginRef = firstname.slice(0, 1) + surname.slice(0, 1) + parseInt(rand);
    console.log(`New login reference is ${loginRef}`)
    const memorable_date = "12-30-2000"
    const password = "!As123456"
    const passwordHashed = bcrypt.hashSync(password)

    try {
        const idInClientExist = await clientModel.findOne().select(
            {
                _id: 1
            }
        ).lean()

        console.log(idInClientExist._id)

        await clientReference.deleteMany({}).lean()

        const clientRef = await clientReference.insertMany([
            {
                clientId: idInClientExist._id,
                client_reference: loginRef,
                client_password: passwordHashed,
                client_memorable_date: memorable_date,
            }])
    } catch (error) {
        console.log("Error in creating login reference number", error)
    }

}
// create clientOtherHousehold collection

const addClientOtherHousehold = async () => {

    try {
        const defaultUser = "client1@msn.com";    // user registered email

        const clientID = await clientModel.findOne({ email: defaultUser }).lean()     // take commune id to save in with user collection

        await clientOtherHouseholdModel.deleteMany({}).lean()

        await clientOtherHouseholdModel.insertMany([

            {
                clientId: "63f509653b253b84d0ac57c1",
                clientOtherHousehold_relationship: "daughter",
                clientOtherHousehold_assessmentPurposeOnly: "no",
                clientOtherHousehold_title: "Mrs",
                clientOtherHousehold_firstname: "Amela",
                clientOtherHousehold_middlename: "-",
                clientOtherHousehold_surname: "Smith",
                clientOtherHousehold_namechange: "No",
                clientOtherHousehold_NINO: "zz563412z",
                clientOtherHousehold_dateofbirth: "09-28-2019",
                clientOtherHousehold_sex: "Female",

                clientOtherHousehold_live_with_you: "yes",
                clientOtherHousehold_moved_to_current_address: "09-28-2019",

                clientOtherHousehold_current_address: "",

                clientOtherHousehold_placed_by_local_authority: "yes",
                clientOtherHousehold_if_yes_local_authority: "birmingham city council",

                clientOtherHousehold_is_she_pregnant: "yes",
                clientOtherHousehold_delivery_date: "2006/10/30",
                clientOtherHousehold_is_spouseOf_another_member: "yes",
                clientOtherHousehold_spouse_another_member_name: "macron",

                clientOtherHousehold_telephone_home: "02013652145",
                clientOtherHousehold_telephone_mobile: "03203254125",
                clientOtherHousehold_telephone_work: "06542145789",
                clientOtherHousehold_email: "member1@yahoo.co.uk",

                clientOtherHousehold_nationality: "British",
                clientOtherHousehold_sex_orient: "Hetrosexual or Straight",
                clientOtherHousehold_ethnicity: "White",
                clientOtherHousehold_religion: "Jewish",
                clientOtherHousehold_illness: "no",
                clientOtherHousehold_are_you_worker: 'no',

                clientOtherHousehold_registration_date: new Date(),
                clientOtherHousehold_comments: "None"
            }
        ])

        console.log("The collection of Client_OtherHousehold has been recreated in the database");


    } catch (err) {
        console.log(err)
    }
}

// create language collection 
const addLanguage = async () => {

    try {

        await languageModel.deleteMany({}).lean()

        await languageModel.insertMany([

            { langKey: "1", language: "Albanian" },
            { langKey: "2", language: "Bengali" },
            { langKey: "3", language: "Buddhist" },
            { langKey: "4", language: "BSL - British sign language" },
            { langKey: "5", language: "Chinese" },
            { langKey: "6", language: "Czechoslovakian" },
            { langKey: "7", language: "English" },
            { langKey: "8", language: "Farsi" },
            { langKey: "9", language: "French" },
            { langKey: "10", language: "German" },
            { langKey: "11", language: "Greek" },
            { langKey: "12", language: "Gujarati" },
            { langKey: "13", language: "Halari" },
            { langKey: "14", language: "Hindi" },
            { langKey: "15", language: "Israeli (Hebrew)" },
            { langKey: "16", language: "Italian" },
            { langKey: "17", language: "Kosovan" },
            { langKey: "18", language: "Lingala" },
            { langKey: "19", language: "Luganda" },
            { langKey: "20", language: "Macedonian" },
            { langKey: "21", language: "Other" },
            { langKey: "22", language: "Portuguese" },
            { langKey: "23", language: "Punjabi" },
            { langKey: "24", language: "Romanian" },
            { langKey: "25", language: "Russian" },
            { langKey: "26", language: "Slovakian" },
            { langKey: "27", language: "Somali" },
            { langKey: "28", language: "Sorani - Kurdish Sorani" },
            { langKey: "29", language: "Spanish" },
            { langKey: "30", language: "Swahili" },
            { langKey: "31", language: "Tamil" },
            { langKey: "32", language: "Turkish" },
            { langKey: "33", language: "Ugandan" },
            { langKey: "34", language: "Urdu" },
            { langKey: "35", language: "Yugoslavian" },
            { langKey: "36", language: "Zulu" }
        ])

        console.log("The collection of Language has been recreated in the database");

    } catch (err) {
        console.log(err)
    }
}

// create tenure collection 
const addTenure = async () => {

    try {

        await tenureModel.deleteMany({}).lean()

        await tenureModel.insertMany([

            { tenureKey: "1", tenure: "Birmingham City Council Tenant" },
            { tenureKey: "2", tenure: "Registered Provider / Housing Association tenant" },
            { tenureKey: "3", tenure: "Living with friends or family" },
            { tenureKey: "4", tenure: "Private Tenant" },
            { tenureKey: "5", tenure: "Owner Occupier" },
            { tenureKey: "6", tenure: "Temporary Accommodation" },
            { tenureKey: "7", tenure: "Other" }

        ])

        console.log("The collection of Tenure has been recreated in the database");

    } catch (err) {
        console.log(err)
    }
}

// create belief collection 
const addBelief = async () => {

    try {

        await beliefModel.deleteMany({}).lean()

        await beliefModel.insertMany([

            { beliefKey: "1", belief: "Christian (including all denominations)" },
            { beliefKey: "2", belief: "Hindu" },
            { beliefKey: "3", belief: "Jewish" },
            { beliefKey: "4", belief: "Muslim" },
            { beliefKey: "5", belief: "Sikh" },
            { beliefKey: "6", belief: "Any other religion" },
            { beliefKey: "7", belief: "Not known" },
            { beliefKey: "8", belief: "Prefer not to say" }

        ])

        console.log("The collection of Belief has been recreated in the database");

    } catch (err) {
        console.log(err)
    }
}

// create sexOrient collection 
const addSexOrient = async () => {

    try {

        await sexOrientModel.deleteMany({}).lean()

        await sexOrientModel.insertMany([

            { sexOrientKey: "1", sexOrient: "Heterosexual or Straight" },
            { sexOrientKey: "2", sexOrient: "Gay or Lesbian" },
            { sexOrientKey: "3", sexOrient: "Prefer not to say" },
            { sexOrientKey: "4", sexOrient: "Other" }

        ])

        console.log("The collection of Sex Orient has been recreated in the database");

    } catch (err) {
        console.log(err)
    }
}


// create nationality collection 
const addnationality = async () => {

    try {

        await nationalityModel.deleteMany({}).lean()

        await nationalityModel.insertMany([

            { nationalityKey: "1", nationality: "UK National" },
            { nationalityKey: "2", nationality: "UK National returning from residence overseas" },
            { nationalityKey: "3", nationality: "Bulgaria" },
            { nationalityKey: "4", nationality: "Croatia" },
            { nationalityKey: "5", nationality: "Czech Republic" },
            { nationalityKey: "6", nationality: "Estonia" },
            { nationalityKey: "7", nationality: "Hungary" },
            { nationalityKey: "8", nationality: "Ireland" },
            { nationalityKey: "9", nationality: "Latvia" },
            { nationalityKey: "10", nationality: "Lithuania" },
            { nationalityKey: "11", nationality: "Poland" },
            { nationalityKey: "12", nationality: "Romania" },
            { nationalityKey: "13", nationality: "Slovakia" },
            { nationalityKey: "14", nationality: "Slovenia" },
            { nationalityKey: "15", nationality: "Other EEA national" },
            { nationalityKey: "16", nationality: "Non-EEA national" }

        ])

        console.log("The collection of Nationality has been recreated in the database");

    } catch (err) {
        console.log(err)
    }
}

// create Ethnicity collection 
const addEthnicity = async () => {

    try {

        await ethnicityModel.deleteMany({}).lean()

        await ethnicityModel.insertMany([

            { ethnicityKey: "1", ethnicity: "Asian or Asian British: Any Other Asian Background" },
            { ethnicityKey: "2", ethnicity: "Asian or Asian British: Bangladeshi" },
            { ethnicityKey: "3", ethnicity: "Asian or Asian British: Chinese" },
            { ethnicityKey: "4", ethnicity: "Asian or Asian British: Indian" },
            { ethnicityKey: "5", ethnicity: "Asian or Asian British: Pakistani" },
            { ethnicityKey: "6", ethnicity: "Black or Black British: African" },
            { ethnicityKey: "7", ethnicity: "Black or Black British: Any Other Black/African/Caribbean background" },
            { ethnicityKey: "8", ethnicity: "Black or Black British: Caribbean" },
            { ethnicityKey: "9", ethnicity: "Mixed: Any Other Mixed Background" },
            { ethnicityKey: "10", ethnicity: "Mixed: White and Asian" },
            { ethnicityKey: "11", ethnicity: "Mixed: White and Black African" },
            { ethnicityKey: "12", ethnicity: "Mixed: White and Black Caribbean/African" },
            { ethnicityKey: "13", ethnicity: "Not known" },
            { ethnicityKey: "14", ethnicity: "Other Ethnic: Any other ethnic group" },
            { ethnicityKey: "15", ethnicity: "Other Ethnic: Arab" },
            { ethnicityKey: "16", ethnicity: "Prefer not to say" },
            { ethnicityKey: "17", ethnicity: "Refused" },
            { ethnicityKey: "18", ethnicity: "White: Gypsy or Irish Traveller" },
            { ethnicityKey: "19", ethnicity: "White: Irish" },
            { ethnicityKey: "20", ethnicity: "White: Other White: Any other white background" },
            { ethnicityKey: "21", ethnicity: "White: Welsh / English / Scottish / Northern Irish" }

        ])

        console.log("The collection of Ethnicity has been recreated in the database");

    } catch (err) {
        console.log(err)
    }
}

// create Correspondence collection 
const addCorrespondence = async () => {

    try {

        await correspondenceModel.deleteMany({}).lean()

        await correspondenceModel.insertMany([

            { correspondenceKey: "1", correspondence: "Home" },
            { correspondenceKey: "2", correspondence: "Work" },
            { correspondenceKey: "3", correspondence: "Solicitor" },
            { correspondenceKey: "4", correspondence: "Parents" },
            { correspondenceKey: "5", correspondence: "Other" }

        ])

        console.log("The collection of Correspondence has been recreated in the database");

    } catch (err) {
        console.log(err)
    }
}

// create Tenancy collection 
const addTenancy = async () => {

    try {

        await tenancyModel.deleteMany({}).lean()

        await tenancyModel.insertMany([

            { tenancyKey: "1", tenancy: "Assuredshorthold tenancy" },
            { tenancyKey: "2", tenancy: "Assured tenancy" },
            { tenancyKey: "3", tenancy: "Excluded tenancy or licence (such as lodging)" },
            { tenancyKey: "4", tenancy: "Regulated tenancy" }

        ])

        console.log("The collection of Tenancy has been recreated in the database");

    } catch (err) {
        console.log(err)
    }
}

// create AreYou collection 
const addAreYou = async () => {

    try {

        await areYouModel.deleteMany({}).lean()

        await areYouModel.insertMany([

            { areYouKey: "1", areYou: "A person who has limited or exceptional leave to enter or remain in the UK with recourse to public funds" },
            { areYouKey: "2", areYou: "A British citizen" },
            { areYouKey: "3", areYou: "A citizen of a country within the EEA with settled status" },
            { areYouKey: "4", areYou: "A citizen of a country within the EEA with pre-settled status" },
            { areYouKey: "5", areYou: "A Commonwealth citizen with a right of abode" },
            { areYouKey: "6", areYou: "A family member of a citizen of a country within the EEA with settled status" },
            { areYouKey: "7", areYou: "A family member of a citizen of a country within the EEA with pre-settled status" },
            { areYouKey: "8", areYou: "A person with leave to remain" },
            { areYouKey: "9", areYou: "An Irish citizen" },
            { areYouKey: "10", areYou: "Seeking, or have sought asylum in the UK" },
            { areYouKey: "11", areYou: "Someone granted humanitarian protection under immigration rules" },
            { areYouKey: "12", areYou: "Someone with permission to be in the UK because you have a sponsor" },
            { areYouKey: "13", areYou: "None of the above" },

        ])

        console.log("The collection of AreYou has been recreated in the database");

    } catch (err) {
        console.log(err)
    }
}

// delay for 5 seconds is to avoid promise error

// addUser();
addClient();

setTimeout(function () { addLanguage() }, 5000);

setTimeout(function () { addTenure() }, 5000);

setTimeout(function () { addBelief() }, 5000);

setTimeout(function () { addSexOrient() }, 5000);

setTimeout(function () { addnationality() }, 5000);

setTimeout(function () { addEthnicity() }, 5000);

setTimeout(function () { addCorrespondence() }, 5000);

setTimeout(function () { addTenancy() }, 5000);

setTimeout(function () { addAreYou() }, 5000);

setTimeout(function () { addClientJoint() }, 5000);

setTimeout(function () { createClientRef() }, 5000);

setTimeout(function () { addClientOtherHousehold() }, 5000);

setTimeout(function () { mongoose.connection.close(); }, 10000);  // Close mongoose connection after 10sec
