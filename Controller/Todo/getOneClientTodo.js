const toDoModel = require('../../Model/todoModel');

const GetOneClientToDoList = (async (req, res) => {
    // TODO
    const id= req.params.clientId
    console.log(id)
    try {
        const toDoList = await toDoModel.find({ clientId: id }).select(            
            {
                toDoDate: 1,
                toDoTask: 1,
                toDoStatus: 1,
                comments: 1

            }).sort({toDoDate: -1}).lean()
        console.log("To do list", toDoList)

        if (toDoList) {
            return res.json({
                message: `To do list found`,
                Status_Reply: "To do list found",
                TodoList: toDoList,
            })
        } else {
            return res.json({
                message: `To do list not found`,
                Status_Reply: "To do list not found",
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
    GetOneClientToDoList
}
