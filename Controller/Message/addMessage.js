
const { validationResult } = require('express-validator');  // to process error results

const clientModel = require('../../Model/clientModel');
const messageModel = require('../../Model/messageModel');

const AddMessage = (async (req, res) => {

    const errorVal = validationResult(req);
    var extractedErrors = [];

    const clientId = req.body.clientId;
    const date_ = req.body.messageDate;
    const subject_ = req.body.messageSubject;
    const From_ = req.body.messageFrom;
    const message_ = req.body.message;
    const status_ = req.body.messageStatus;

    console.log(`${clientId}, ${date_}, ${subject_}, ${From_}, ${message_}, ${status_}`);

    try {
        const clientExist = await clientModel.findOne({ _id: clientId }).select(
            {
                _id: 1
            }
        ).lean()

        if (errorVal.isEmpty()) {
            if (!clientExist) {
                return res.json({
                    message: `Client not exist`,
                    Status_Reply: "Request failed",
                })
            } else {
                const messageInfo = await messageModel.create([
                    {
                        clientId: clientId,
                        messageDate: date_,
                        messageSubject: subject_,
                        messageFrom: From_,
                        message: message_,
                        messageStatus: status_
                    }])
                console.log("Message Information ", messageInfo)
                return res.json({
                    message: `Message saved successfully`,
                    Status_Reply: "Message saved successfully",
                    MessageInfo: messageInfo,
                })
            }

        } else {
            extractedErrors = []
            errorVal.errors.map(err => extractedErrors.push({ [err.param]: err.msg }));
            console.log("Please verify the details", extractedErrors);
            console.log(errorVal.errors[0].param)
            return res.json({
                message: `Please verify the details`,
                Status_Reply: errorVal.errors[0].param
            })
        }

    } catch (error) {
        console.log("Error while saving your details", error)
        return res.json({
            message: `Error while saving your details`,
            Status_Reply: error
        })
    }
})

module.exports = {
    AddMessage
}