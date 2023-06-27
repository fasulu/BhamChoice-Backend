const clientJointModel = require('../../Model/clientJointModel');

const getOneJoint = (async (req, res) => {

    const JointId = req.params._id;

    console.log(JointId)
    
    try {
        const JointExist = await clientJointModel.findOne({ _id: JointId }).select(
            {
                _id: 1,
                clientId: 1,
                clientJoint_relationship: 1,
                clientJoint_title: 1,
                clientJoint_firstname: 1,
                clientJoint_middlename: 1,
                clientJoint_surname: 1,
                clientJoint_NINO: 1,
                clientJoint_dateofbirth: 1,
                clientJoint_sex: 1,
                clientJoint_current_live_with_you: 1,
                clientJoint_livingin_different_address: 1,
                clientJoint_moved_to_current_address: 1,
                clientJoint_corres_postcode: 1,
                clientJoint_corres_address_line1: 1,
                clientJoint_corres_address_line2: 1,
                clientJoint_corres_address_line3: 1,
                clientJoint_corres_address_line4: 1,
                clientJoint_is_she_pregnant: 1,
                clientJoint_delivery_date: 1,
                clientJoint_telephone_home: 1,
                clientJoint_telephone_mobile: 1,
                clientJoint_telephone_work: 1,
                clientJoint_email: 1,
                clientJoint_illness: 1,
                clientJoint_are_you_worker: 1,
                clientJoint_comments: 1,
            }).lean()

        console.log("Joint Partner", JointExist)
        return res.status(200).json({
            message: `Joint Partner found`,
            JointExist,
        })
    } catch (error) {
        console.log("Joint Partner not found");
        return res.status(400).json({
            message: `Joint Partner not found`,
            error
        })
    }
})

module.exports = {
    getOneJoint
}