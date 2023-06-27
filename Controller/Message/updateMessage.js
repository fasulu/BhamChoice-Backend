
const { validationResult } = require('express-validator');  // to process error results

const messageModel = require('../../Model/messageModel');

const UpdateMessage = (async (req, res) => {

    const msgId = req.params._id;
    const status_ = req.body.messageStatus;

    console.log("Data from frontend ", msgId, status_);

    try {
        if (msgId) {

            const msgExist = await messageModel.find({ _id: msgId }).lean()

            console.log(`message exist ${msgExist}`)

            if (msgExist) {
                const msgInfo = await messageModel.updateOne({ _id: msgId },
                    {
                        "$set": {
                            "messageStatus": status_
                        }
                    }, { upsert: true }).lean()

                console.log("Message updated successfully")

                return res.json({
                    message: `Message updated successfully`,
                    Status_Reply: "Message marked as read",
                    MessageInfo: msgInfo
                })

            } else {
                console.log("Message Information ", msgInfo)
                return res.json({
                    message: `Message not found`,
                    Status_Reply: "Check you request or Message not exist",
                    MessageInfo: msgInfo,
                })
            }

        } else {
            return res.json({
                message: `Insufficent information`,
                Status_Reply: "Check you request or Message not exist"
            })
        }
    } catch (error) {
        console.log("Error while saving your details", error)
        return res.json({
            message: `Error while saving your details`,
            Status_Reply: "Check you request or Message not exist",
            Error: error
        })
    }
})

module.exports = {
    UpdateMessage
}
