const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for clientOtherHousehold, clientId have relation to clienModel _id
const clientOtherHouseholdSchema = new Schema(
    {
        clientId: {
            type: mongoose.Types.ObjectId,
            ref: "Client"
        },
        clientOtherHousehold_relationshipWithClient: { type: String, require: true },      
        clientOtherHousehold_assessment_purpose_only: { type: String, require: true },    // addedd          
        clientOtherHousehold_title: { type: String, require: true },
        clientOtherHousehold_firstname: { type: String, require: true },
        clientOtherHousehold_middlename: { type: String },
        clientOtherHousehold_surname: { type: String, require: true },
        clientOtherHousehold_namechange: { type: String, require: true },
        clientOtherHousehold_NINO: { type: String },
        clientOtherHousehold_dateofbirth: { type: String, require: true },
        clientOtherHousehold_sex: { type: String, require: true },

        clientOtherHousehold_live_with_you: { type: String, max: 250, require: true },
        clientOtherHousehold_moved_to_current_address: { type: String, require: true },         
        clientOtherHousehold_current_address: { type: String, max: 250, require: true },
        
        clientOtherHousehold_is_she_pregnant: { type: String },
        clientOtherHousehold_spouse_another_member_name: { type: String },
        clientOtherHousehold_DeliveryDate: { type: String }, 
        
        clientOtherHousehold_placed_by_local_authority: { type: String, max: 3 },
        clientOtherHousehold_if_yes_local_authority: { type: String, max: 25 },
        
        clientOtherHousehold_telephone_home: { type: String },
        clientOtherHousehold_telephone_mobile: { type: String },
        clientOtherHousehold_telephone_work: { type: String }, 
        clientOtherHousehold_email: { type: String }, 
        
        clientOtherHousehold_nationality: { type: String, max: 50 },
        clientOtherHousehold_sex_orient: { type: String, max: 25 },
        clientOtherHousehold_ethnicity: { type: String, max: 75 },
        clientOtherHousehold_religion: { type: String, max: 50 },
        clientOtherHousehold_illness: { type: String, max: 17 }, 
        
        clientOtherHousehold_are_you_worker: { type: String, max:3 },

        clientOtherHousehold_registration_date: { type: Date },
        clientOtherHousehold_comments: {type: String, max: 500},        
    }
);

const clientOtherHouseholdModel = mongoose.model("ClientOtherHousehold", clientOtherHouseholdSchema);

module.exports = clientOtherHouseholdModel;   // clientOtherHouseholdModel export
