const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for clientJoint, clientId have relation to clienModel _id

const clientJointSchema = new Schema(
    {
        clientId: {
            type: mongoose.Types.ObjectId,
            ref: "Client",
            require: true,
            unique: true
        },
        // _id: {type:String, require: true },
        clientJoint_relationship: { type: String, require: true },	// included
        clientJoint_title: { type: String, require: true },
        clientJoint_firstname: { type: String, require: true },
        clientJoint_middlename: { type: String, require: true },
        clientJoint_surname: { type: String, require: true },
        clientJoint_namechange: { type: String, require: true },
        clientJoint_NINO: { type: String, min: 9, max: 9, require: true, unique: true },    // UNIQUE
        clientJoint_dateofbirth: { type: String },
        clientJoint_sex: { type: String },

        clientJoint_lived_abroad: { type: String },
        // moved from which country removed
        clientJoint_moved_to_current_address: { type: String },

        clientJoint_current_live_with_you: { type: String },
        clientJoint_livingin_different_address: { type: String },        

        clientJoint_corres_postcode: { type: String, max: 8 },
        clientJoint_corres_address_line1: { type: String, max: 200 },
        clientJoint_corres_address_line2: { type: String, max: 50 },
        clientJoint_corres_address_line3: { type: String, max: 50 },
        clientJoint_corres_address_line4: { type: String, max: 50 },

        clientJoint_placed_by_local_authority: { type: String, max: 3 },
        clientJoint_if_yes_local_authority: { type: String, max: 25 },

        clientJoint_is_she_pregnant: {type:String, max: 3 },
        clientJoint_delivery_date: { type: String },

        clientJoint_telephone_home: { type: String, unique: false },
        clientJoint_telephone_mobile: { type: String, unique: false },
        clientJoint_telephone_work: { type: String, unique: false },
        clientJoint_email: { type: String, unique: true },                  // UNIQUE

        clientJoint_ethnicity: { type: String, max: 75 },
        clientJoint_nationality: { type: String, max: 50 },
        clientJoint_sex_orient: { type: String, max: 25 },
        clientJoint_religion: { type: String, max: 50 },
        clientJoint_illness: { type: String, max: 17 },

        clientJoint_language_prefer: { type: String, max: 30 },
        clientJoint_interpreter: { type: String, max: 3 },

        clientJoint_current_tenure: { type: String, max: 15 },        
        clientJoint_current_tenure_bhamCouncilTenancyNum: { type: String, max: 15 },

        clientJoint_from_which_country: { type: String, max: 75 },		// this field is mentioned as 'areyou' in frontend
        clientJoint_are_you_worker: { type: String, max: 3 },
        clientJoint_connection_to_birmingham: { type: String, max: 200 },

        clientJoint_registration_date: { type: Date },
        clientJoint_comments: { type: String, max: 500 },

    }
);

const clientJointModel = mongoose.model("ClientJoint", clientJointSchema);

module.exports = clientJointModel;   // clientJointModel export
