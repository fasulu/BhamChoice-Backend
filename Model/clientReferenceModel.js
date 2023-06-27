const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientReferenceSchema = new Schema(
    {
        clientId: {
            type: mongoose.Types.ObjectId,
            ref: "Client"
        },
        client_reference: { type: String, min: 9, max: 9, require: true, unique:true },
        client_password: { type: String, require: true, max: 200 },
        client_memorable_date: { type: String },
    }
);
const clientReferenceModel = mongoose.model("ClientReference", clientReferenceSchema);
module.exports = clientReferenceModel;   // clientReferenceModel export
