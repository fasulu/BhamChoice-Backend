const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for user, _id has relationship with paymentModel as userId
const nationalitySchema = new Schema(
    {
        nationalityKey: { type: Number, unique: true, require: true,  },
        nationality: { type: String, unique: true, require: true },
        created: { type: Date, default: Date.now }
    }
);

const nationalityModel = mongoose.model("Nationality", nationalitySchema);

module.exports = nationalityModel;   // nationalityModel export