const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sexOrientSchema = new Schema(
    {
        sexOrientKey: { type: Number, unique: true, require: true,  },
        sexOrient: { type: String, unique: true, require: true },
        created: { type: Date, default: Date.now }
    }
);

const sexOrientModel = mongoose.model("SexOrient", sexOrientSchema);

module.exports = sexOrientModel;   // sexOrientModel export