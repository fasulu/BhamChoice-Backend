const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');

const clientReferenceModel = require('../../Model/clientReferenceModel');
const clientModel = require('../../Model/clientModel');

const forgottenRef = (async (req, res) => {

    const errorVal = validationResult(req);

    const clientEmail = req.body.client_email
    const clientDOB = req.body.client_dateofbirth;

    console.log(`body value ${clientEmail}, ${clientDOB}`)

    try {

        if (errorVal.isEmpty()) {

            console.log("No Error during Validation");

            const validClient = await clientModel.findOne({ client_email: clientEmail }).select({
                _id: 1,
                client_email: 1,
                client_dateofbirth: 1
            }).lean()

            console.log(validClient)

            if (validClient) {
                const email = validClient.client_email == clientEmail ? true : false;
                const dob = validClient.client_dateofbirth == clientDOB ? true : false;

                if (email && dob) {

                    const validClientRef = await clientReferenceModel.findOne({ clientId: validClient._id }).select({
                        clientId: 1,
                        client_reference: 1
                        
                    }).lean()

                    if (validClientRef) {
                        console.log(`valid client reference model `, validClientRef.client_reference)

                        return res.json({
                            message: `Client reference found`,
                            Status_Reply: 'Success',
                            ClientRef: validClientRef.client_reference,
                            ClientId: validClientRef.clientId,
                        })
                    } else {
                        console.log('Client reference not found')
                        return res.json({
                            message: 'Client reference not found',
                            Status_Reply: 'Request failed'
                        })
                    }
                } else {
                    return res.json({
                        message: `Email or date of birth does not match`,
                        Status_Reply: 'Request failed'
                    })
                }
            } else {
                return res.json({
                    message: `Email or date of birth does not match`,
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
                Status_Reply: errorVal.errors[0].param
            })
        }
    } catch (error) {

        return res.json({
            message: `Email or date of birth does not match`,
            error
        })
    }
})

module.exports = {
    forgottenRef
}
