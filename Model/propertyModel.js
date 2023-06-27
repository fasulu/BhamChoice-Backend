const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propertySchema = new Schema(
    {
        propertyId: { type: String, min: 5, max: 9, require: true, unique: true },
        advertType: { type: String, min: 5, max: 15, require: true },
        type: { type: String, min: 4, max: 25, require: true },
        address: { type: String, min: 13, max: 100, require: true },
        town: { type: String, min: 4, max: 25, require: true },
        postcode: { type: String, min: 7, max: 8, require: true },
        bedRoom: { type: Number, min: 0, max: 9, require: true },
        bathRoom: { type: Number, min: 0, max: 3, require: true },
        reception: { type: String, min: 0, max: 3, min: 7, max: 7 },
        cTaxBand: { type: String, min: 1, max: 1, require: true },
        tenancyType: { type: String, min: 4, max: 15, require: true },
        availableFrom: { type: String, min: 4, max: 50, require: true },
        furnished: { type: String, min: 2, max: 3, require: true },
        parking: { type: String, min: 2, max: 3, require: true },
        garage: { type: String, min: 2, max: 3, require: true },
        garden: { type: String, min: 2, max: 3, require: true },
        patio: { type: String, min: 2, max: 3, require: true },
        floor: { type: Number, require: true },
        kitchenFitted: { type: String, min: 2, max: 3, require: true },
        deposit: { type: Number, require: true },
        fees: { type: Number, require: true },
        rent: { type: Number, require: true },
        pets: { type: String, require: true },
        imageUrl: { type: String, require: true },
        comments: { type: String, min: 4, max: 500, require: true },
        dateRecorded: { type: Date },
    }
);
const propertyModel = mongoose.model("Property", propertySchema);
module.exports = propertyModel;   // propertyModel export