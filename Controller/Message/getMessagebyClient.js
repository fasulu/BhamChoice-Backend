const messageModel = require('../../Model/messageModel');

const GetMessageByClient = (async (req, res) => {
    
    const id= req.params.clientId
    console.log(id)

    try {
        const messageList = await messageModel.find({ clientId: id }).select(            
            {
                messageDate: 1,
                messageSubject: 1,
                messageFrom: 1,
                message: 1,
                messageStatus: 1

            }).sort({messageDate: -1}).lean()
        console.log("Message list", messageList)

        if (messageList) {
            return res.json({
                message: `Message list found`,
                Status_Reply: "Message(s) list found",
                MessageList: messageList,
            })
        } else {
            return res.json({
                message: `Message list not found`,
                Status_Reply: "Message list not found",
            })
        }

    } catch (error) {
        console.log("Please verify your details");
        return res.json({
            message: `Please verify your details`, error,
            Status_Reply: "Request fails"
        })
    }
})

module.exports = {
    GetMessageByClient
}
