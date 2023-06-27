const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema(
    {
        clientId: {
            type: mongoose.Types.ObjectId,
            ref: "Client"
        },
        // messageDate: { type: Date, require: true },
        messageDate: { type: String, require: true },
        messageSubject: { type: String, require: true  },        
        messageFrom: { type: String, require: true  },        
        message: { type: String, require: true  },        
        messageStatus: { type: Boolean, require: true  },        
    }
);
const messageModel = mongoose.model("Message", messageSchema);
module.exports = messageModel;   // messageModel export