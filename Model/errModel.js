const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const errSchema = new Schema(
    {
        error_Location: { type: String },
        error_Date: { type: String },
        error_Detail: { type: String },        
    }
);
const errModel = mongoose.model("ErrBasket", errSchema);
module.exports = errModel;   // errModel export