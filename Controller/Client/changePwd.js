const clientModel = require('../../Model/clientModel');
const clientReferenceModel = require('../../Model/clientReferenceModel')
const bcrypt = require('bcryptjs');

const changePwd = (async (req, res) => {

    const clientId = req.params._id;
    const oldPassword = req.body.oldPwd
    const newPassword = req.body.newPwd;

    console.log("From frontend", clientId, newPassword, oldPassword)

    try {

        const clientExist = await clientReferenceModel.findOne({ _id: clientId }).lean();

        console.log("From backend clientExist in clientReference", clientExist.clientId, clientExist._id, clientExist.client_password)

        const validPassword = bcrypt.compareSync(oldPassword, clientExist.client_password)
        if (validPassword) {
            const passwordHash = bcrypt.hashSync(newPassword);
            const pwdChanged = await clientReferenceModel.updateOne({ _id: clientId },
                {
                    "$set": {
                        client_password: passwordHash
                    }
                }, { upsert: true }).lean()

            console.log("Password updated successfully", pwdChanged)
            return res.json({
                message: `Password changed successfully`,
                Status_Reply: "Success"
            })
        } else {
            console.log("Please verify your details");
            return res.json({
                message: `Please verify your details`
            })
        }

    } catch (error) {
        console.log("Unable to proceed with your request", error);
        return res.json({
            message: `Unable to proceed with your request`, error
        })
    }
})

module.exports = {
    changePwd
}