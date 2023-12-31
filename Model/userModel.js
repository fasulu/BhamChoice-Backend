const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for user, _id has relationship with paymentModel as userId
const userSchema = new Schema(
    {
        email: { type: String, unique: true, require: true },
        password: { type: String, require: true, min: 6, max: 15 },
        status: { type: String, require: true, default: "inactive" },
        created: { type: Date, default: Date.now }
    }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;   // userModel export