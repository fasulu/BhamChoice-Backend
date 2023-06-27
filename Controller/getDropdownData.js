const areYouModel = require('../Model/areYouModel');

const getAreYou = (async (req, res) => {

    const areYouKey = req.body;

    console.log(areYouKey)

    try {
        const areYouKeyExist = await areYouModel.find().select(
            {
                _id: 1,
                areYouKey: 1,
                areYou: 1
            }).lean()

        console.log("List of 'are you' found", areYouKeyExist)
        return res.json({
            message: `01: List of 'are you' found`,
            areYouKeyExist,
        })

    } catch (error) {
        console.log("List of 'are you' not found");
        return res.json({
            message: `02: List of 'are you' not found`
        })
    }
})

module.exports = {
    getAreYou
}