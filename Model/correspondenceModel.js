const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const correspondenceSchema = new Schema(
    {
        correspondenceKey: { type: Number, unique: true, require: true,  },
        correspondence: { type: String, unique: true, require: true },
        created: { type: Date, default: Date.now }
    }
);

const correspondenceModel = mongoose.model("Correspondence", correspondenceSchema);

module.exports = correspondenceModel;   // correspondenceModel export