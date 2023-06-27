
const { validationResult } = require('express-validator');  // to process error results

const clientModel = require('../../Model/clientModel');
const toDoModel = require('../../Model/todoModel');

const AddToDo = (async (req, res) => {

    const errorVal = validationResult(req);
    var extractedErrors = [];

    const clientId = req.body.clientId;
    const date_ = req.body.toDoDate;
    const task_ = req.body.toDoTask;
    const status_ = req.body.toDoStatus;
    const comment_ = req.body.comments;

    console.log(`${clientId}, ${date_}, ${task_}, ${status_}, ${comment_}`);

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
                const toDoInfo = await toDoModel.create([
                    {
                        clientId: clientId,
                        toDoDate: date_,
                        toDoTask: task_,
                        toDoStatus: status_,
                        comments: comment_
                    }])
                console.log("To do Information ", toDoInfo)
                return res.json({
                    message: `To do saved successfully`,
                    Status_Reply: "To do saved successfully",
                    ToDoInfo: toDoInfo,
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
    AddToDo
}