const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');    // to create jsonwebtoken

const clientReferenceModel = require('../../Model/clientReferenceModel');

const clientRefLogin = (async (req, res) => {

    // const tokenExpire = config.tokenExpire      // setting for token expires in 60m
    const errorVal = validationResult(req);

    const clientref = req.body.client_reference;

    console.log(`body value ${clientref}`)

    try {

        if (errorVal.isEmpty()) {

            console.log("No Error during Validation");

            const validClient = await clientReferenceModel.findOne({ client_reference: clientref }).select({
                client_reference: 1
            }).lean()

            if (validClient) {
                console.log(`valid client reference model `, validClient)

                return res.json({
                    message: `Client ${validClient.client_reference} found`,
                    Status_Reply: 'Success'
                })
            } else {
                return res.json({
                    message: `Client not found`,
                    Status_Reply: 'Request failed'
                })
            }
        } else {
            const extractedErrors = []
            errorVal.errors.map(err => extractedErrors.push({ [err.param]: err.msg }));
            console.log("Please verify the details", extractedErrors);
            console.log(errorVal.errors[0].param)
            return res.json({
                message: `Please verify the details`,
                extractedErrors
            })
        }
    } catch (error) {

        return res.json({
            message: `Incorrect login reference`
        })
    }
})

module.exports = {
    clientRefLogin
}
