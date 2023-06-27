const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beliefSchema = new Schema(
    {
        beliefKey: { type: Number, unique: true, require: true, },
        belief: { type: String, unique: true, require: true },
        created: { type: Date, default: Date.now }
    }
);

const beliefModel = mongoose.model("Belief", beliefSchema);

module.exports = beliefModel;   // beliefModel export