const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for client, _id have relationship with clientJointModel and clientOtherHouseholdModel

const clientSchema = new Schema(
    {
        client_title: { type: String, require: true },
        client_firstname: { type: String, max: 20, require: true },
        client_middlename: { type: String, max: 20, require: true },
        client_surname: { type: String, max: 20, require: true },
        client_namechange: { type: String, max: 50, require: true },
        client_NINO: { type: String, max: 9, require: true, unique: true },               // UNIQUE
        client_dateofbirth: { type: String },
        client_sex: { type: String },
        
        client_lived_abroad: { type: String },
        client_moved_to_current_address: { type: String },
        
        client_postcode: { type: String, max: 8 },
        client_address_line1: { type: String, max: 75 },
        client_address_line2: { type: String, max: 75 },
        client_address_line3: { type: String, max: 75 },
        client_address_line4: { type: String, max: 75 },
        
        client_is_rented_property: { type: String, max: 3 },
        client_landlord_name: { type: String, max: 30 },
        client_landlord_address: { type: String, max: 100 },
        client_landlord_tenancy_type: { type: String, max: 50 },
        client_landlord_info_about_this_address: { type: String, max: 150 },
        
        client_communication_address: { type: String, max: 25 },
        client_correspondence_type: { type: String,  },			// included
        client_correspondence_postcode: { type: String, max: 8 },
        client_correspondence_address_line1: { type: String, max: 75 },
        client_correspondence_address_line2: { type: String, max: 75 },
        client_correspondence_address_line3: { type: String, max: 75 },
        client_correspondence_address_line4: { type: String, max: 75 },
        
        client_placed_by_local_authority: { type: String, max: 3 },
        client_if_yes_local_authority: { type: String, max: 25 },
        
        client_telephone_home: { type: String, unique: false },
        client_telephone_mobile: { type: String, unique: false },
        client_telephone_work: { type: String, unique: false }, 
        client_email: { type: String, unique: true },                        // UNIQUE
        
        client_ethnicity: { type: String, max: 10 },
        client_nationality: { type: String, max: 15 },
        client_sex_orient: { type: String, max: 25 },
        client_religion: { type: String, max: 15 },
        client_illness: { type: String, max: 25 },
        
        client_language_prefer: { type: String, max: 10 },
        client_interpreter: { type: String, max: 3 },
        
        client_current_tenure: { type: String, max: 15 },        
        client_current_tenure_TenancyRefNo: { type: String, max: 15 },

        client_from_which_country: { type: String, max: 75 },		// this field is mentioned as 'areyou' in frontend
        client_connection_to_birmingham: { type: String, max: 200 },
        
        // client_password: { type: String, require: true, max: 200 },
        // client_memorable_date: { type: String },

        client_registration_date: { type: Date },
        client_status: { type: String, require: true, default: "active" },

        client_comments: {type: String, max: 500},        
   
    }
);

const clientModel = mongoose.model("Client", clientSchema);

module.exports = clientModel;   // clientModel export
