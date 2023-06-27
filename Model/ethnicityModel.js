const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for user, _id has relationship with paymentModel as userId
const ethnicitySchema = new Schema(
    {
        ethnicityKey: { type: Number, unique: true, require: true,  },
        ethnicity: { type: String, unique: true, require: true },
        created: { type: Date, default: Date.now }
    }
);

const ethnicityModel = mongoose.model("Ethnicity", ethnicitySchema);

module.exports = ethnicityModel;   // ethnicityModel export