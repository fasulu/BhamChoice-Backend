const clientJointModel = require('../../Model/clientJointModel');

const getJointList = (async (req, res) => {

    const joints = req.body;

    console.log(joints)

    try {
        const jointExist = await clientJointModel.find().select(
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
                clientJoint_telephone_home: 1,
                clientJoint_telephone_mobile: 1,
                clientJoint_telephone_work: 1,
                clientJoint_email: 1

            }).lean()
        console.log("Joint list", jointExist)

        return res.json({
            message: `Joint list found`,
            jointExist,
        })
    } catch (error) {
        console.log("Joint list not found");
        return res.json({
            message: `Joint list not found`, error

        })
    }
})

module.exports = {
    getJointList
}