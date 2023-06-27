const errModel = require('../Model/errModel');

const saveErrDetail = (async (req, res) => {

    const errLocation = req.body.error_Location;
    const errDate = req.body.error_Date;
    const errDetail = req.body.error_Detail;

    console.log("Data from frontend " +
        errLocation,
        errDate,
        errDetail
    )
    try {
        const errAdded = await errModel.create([
            {
                error_Location: errLocation,
                error_Date: errDate,
                error_Detail: errDetail
            }])
        console.log(errAdded)
        return res.json({
            message: `Error message recorded successfully`,
            Status_Reply: 'Success',
        })
    } catch (error) {
        return res.json({
            message: `Unable to proceed on your request`,
            Status_Reply: 'Failed',
            error
        })
    }
})

module.exports = {
    saveErrDetail
}
