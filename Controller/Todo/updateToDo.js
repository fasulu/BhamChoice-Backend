
const { validationResult } = require('express-validator');  // to process error results

const toDoModel = require('../../Model/todoModel')

const UpdateToDo = (async (req, res) => {

    const todoId = req.params._id;
    const date_ = req.body.toDoDate;
    const task_ = req.body.toDoTask;
    const status_ = req.body.toDoStatus;
    const comments = req.body.comments;

    console.log("Data from frontend ", todoId, date_, task_, status_, comments);

    try {
        if (todoId) {

            const todoExist = await toDoModel.find({ _id: todoId }).lean()

            console.log(`todo exist ${todoExist}`)

            if (todoExist.length > 0) {
                const toDoInfo = await toDoModel.updateOne({ _id: todoId },
                    {
                        "$set": {
                            "toDoDate": date_,
                            "toDoTask": task_,
                            "toDoStatus": status_,
                            "comments": comments
                        }
                    }, { upsert: true }).lean()

                console.log("To do updated successfully")

                return res.json({
                    message: `To do updated successfully`,
                    Status_Reply: "To do updated successfully",
                    ToDoInfo: toDoInfo
                })

            } else {
                console.log("To do Information ", toDoInfo)
                return res.json({
                    message: `To do not found`,
                    Status_Reply: "Check you request or to do not exist",
                    ToDoInfo: toDoInfo,
                })
            }

        } else {
            return res.json({
                message: `Insufficent information`,
                Status_Reply: "Check you request or to do not exist"
            })
        }
    } catch (error) {
        console.log("Error while saving your details", error)
        return res.json({
            message: `Error while saving your details`,
            Status_Reply: "Check you request or to do not exist",
            Error: error
        })
    }
})

module.exports = {
    UpdateToDo
}
