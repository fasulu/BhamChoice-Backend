const clientJointModel = require('../../Model/clientJointModel');

const deleteJoint = (async (req, res) => {
    
    const jointId = req.params._id;

    console.log(jointId)

    try {

        // check is the joint/partner is exist

        const jointExist = await clientJointModel.findById(jointId).lean()

        if (jointExist) {

            console.log(jointExist)

            // find and delete joint/partner by given _id

            const jointDeleted = await clientJointModel.findByIdAndDelete({ _id: jointId }).exec()

            return res.status(200).json({
                message: "Success",
                Status_Reply: "Joint applicant removed successfully"
            })
        } else {
            return res.status(200).json({
                message: `Request failed`,
                Status_Reply: "Joint/Partner not found",
                error
            })
        }

    } catch (error) {

        return res.status(400).json({
            message: "Request failed",
            Status_Reply: "Unable to delete Joint/Partner, please contact us",
            error
        })
    }
})

module.exports = {deleteJoint}