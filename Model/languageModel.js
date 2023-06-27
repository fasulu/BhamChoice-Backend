const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const languageSchema = new Schema(
    {
        langKey: { type: Number, unique: true, require: true,  },
        language: { type: String, unique: true, require: true },
        created: { type: Date, default: Date.now }
    }
);

const languageModel = mongoose.model("Language", languageSchema);

module.exports = languageModel;   // languageModel export