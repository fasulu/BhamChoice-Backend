const clientOtherHouseholdModel = require('../../Model/clientOtherHouseholdModel');

const deleteMember = (async (req, res) => {

    const memberId = req.params._id;
    console.log(memberId)

    if (memberId) {

        try {

            // check is the household member is exist

            const memberExist = await clientOtherHouseholdModel.findById(memberId).lean()

            if (memberExist) {

                console.log(memberExist)

                // find and delete household member by given _id

                const memberDeleted = await clientOtherHouseholdModel.findByIdAndDelete({ _id: memberId }).exec()

                res.status(200).json({
                    message: "Success",
                    Status_Reply: "Household member removed successfully",
                    MemberInfo: memberDeleted                    
                })
            } else {
                res.status(200).json({
                    message: `Request failed`,
                    Status_Reply: "Household member not found",
                    error
                })
            }

        } catch (error) {

            res.status(400).json({
                message: "Request failed",
                Status_Reply: "Unable to delete Household member, please contact us",
                error
            })
        }
    } else {
        console.log("Insufficient information");

        return res.json({
            message: `Insufficient information`,
            Status_Reply: "Request failed",
        })
    }

})

module.exports = { deleteMember }