const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toDoSchema = new Schema(
    {
        clientId: {
            type: mongoose.Types.ObjectId,
            ref: "Client"
        },
        toDoDate: { type: String, require: true },
        // toDoDate: { type: Date, require: true },
        toDoTask: { type: String, require: true  },        
        toDoStatus: { type: Boolean, require: true  },        
        comments: { type: String, require: true  },        
    }
);
const toDoModel = mongoose.model("ToDo", toDoSchema);
module.exports = toDoModel;   // toDoModel export