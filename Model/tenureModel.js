const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for user, _id has relationship with paymentModel as userId
const tenureSchema = new Schema(
    {
        tenureKey: { type: Number, unique: true, require: true,  },
        tenure: { type: String, unique: true, require: true },
        created: { type: Date, default: Date.now }
    }
);

const tenureModel = mongoose.model("Tenure", tenureSchema);

module.exports = tenureModel;   // tenureModel export