const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const areYouSchema = new Schema(
    {
        areYouKey: { type: Number, unique: true, require: true, },
        areYou: { type: String, unique: true, require: true },
        created: { type: Date, default: Date.now }
    }
);

const areYouModel = mongoose.model("AreYou", areYouSchema);

module.exports = areYouModel;   // areYouModel export