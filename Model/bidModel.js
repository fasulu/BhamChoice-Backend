const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bidSchema = new Schema(
    {
        clientId: {
            type: mongoose.Types.ObjectId,
            ref: "Client"
        },
        propertyId: { type: String, min: 5, max: 7, require: true },
        bidPosition: { type: Number, require: true },
        bidDate: { type: Date },        
    }
);
const bidModel = mongoose.model("Bid", bidSchema);
module.exports = bidModel;   // bidModel export