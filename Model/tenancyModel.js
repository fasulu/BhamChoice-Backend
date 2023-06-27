const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for user, _id has relationship with paymentModel as userId
const tenancySchema = new Schema(
    {
        tenancyKey: { type: Number, unique: true, require: true,  },
        tenancy: { type: String, unique: true, require: true },
        created: { type: Date, default: Date.now }
    }
);

const tenancyModel = mongoose.model("Tenancy", tenancySchema);

module.exports = tenancyModel;   // tenancyModel export