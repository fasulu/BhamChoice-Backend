const clientReferenceModel = require('../../Model/clientReferenceModel')
const bcrypt = require('bcryptjs');

const changeMemorableDate = (async (req, res) => {

    const clientId = req.params._id;
    const oldPassword = req.body.oldPwd;
    const memDate_ = req.body.newDate;

    console.log("From frontend", clientId, oldPassword, memDate_)

    try {

        const clientExist = await clientReferenceModel.findOne({ _id: clientId }).lean();
        console.log("From backend clientExist in clientReference", clientExist.clientId, clientExist._id, clientExist.client_memorable_date)

        if (clientExist) {
            console.log(`client exist`)
            const validPassword = bcrypt.compareSync(oldPassword, clientExist.client_password)

            if (validPassword) {
                 const memorableDateChanged = await clientReferenceModel.updateOne({ _id: clientId },
                {
                    "$set": {
                        client_memorable_date: memDate_
                    }
                }, { upsert: true }).lean()

                console.log("Memorable date changed successfully", memorableDateChanged)
                return res.json({
                    message: `Memorable date changed successfully`,
                    Status_Reply: "Success",
                    memorableDateChanged,
                })
            } else {
                console.log("Please verify your details");
                return res.json({
                    message: `Please verify your details`
                })
            }

        } else {
            console.log("Client not found");
            return res.json({
                message: `Client not found`, error
            })
        }
    } catch (error) {
        console.log("Unable to proceed with your request");
        return res.json({
            message: `Unable to proceed with your request`, error
        })
    }
})

module.exports = {
    changeMemorableDate
}