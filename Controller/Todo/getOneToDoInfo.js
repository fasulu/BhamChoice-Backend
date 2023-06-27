const toDoModel = require('../../Model/todoModel');

const GetOneClientToDoInfo = (async (req, res) => {

    const id= req.params._id
    console.log(id)
    try {
        const toDoInfo = await toDoModel.find({ _id: id }).select(            
            {
                toDoDate: 1,
                toDoTask: 1,
                toDoStatus: 1,
                comments: 1
            }).sort({toDoDate: -1}).lean()
        console.log("To do info", toDoInfo)

        if (toDoInfo) {
            return res.json({
                message: `To do info found`,
                Status_Reply: "1 To do info found",
                ToDoInfo: toDoInfo
            })
        } else {
            return res.json({
                message: `To do info not found`,
                Status_Reply: "To do info not found",
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
    GetOneClientToDoInfo
}
