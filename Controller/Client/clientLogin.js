const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');    // to create jsonwebtoken

const clientReferenceModel = require('../../Model/clientReferenceModel');
const clientModel = require('../../Model/clientModel');

const clientLogin = (async (req, res) => {

    // const tokenExpire = config.tokenExpire      // setting for token expires in 60m
    const errorVal = validationResult(req);

    const clientref = req.body.client_reference
    const clientpwd = req.body.client_password
    const clientdte = req.body.client_memorable_date;

    console.log(`body value ${clientref}, ${clientpwd}, ${clientdte}`)

    try {

        if (errorVal.isEmpty()) {

            console.log("No Error during Validation");

            const validClient = await clientReferenceModel.findOne({ client_reference: clientref }).select({
                client_reference: 1,
                clientId: 1,
                client_password: 1,
                client_memorable_date: 1
            }).lean()

            if (validClient) {
                console.log(`valid client reference model `, validClient)
                // const memDate = validClient.client_memorable_date.toISOString().slice(0, 10);
                const memDate = validClient.client_memorable_date;

                if (memDate === clientdte) {
                    console.log('Dates are equal ', memDate, clientdte)

                    const validPassword = bcrypt.compareSync(clientpwd, validClient.client_password)

                    if (validPassword) {

                        console.log(`Valid password is ${validPassword}`);
                        console.log(`client memorable date is ${clientdte}, ${memDate}`)

                        const validClientName = await clientModel.findOne({ _id: validClient.clientId }).select({
                            _id: 1,
                            client_firstname: 1,
                            client_middlename: 1,
                            client_surname: 1
                        }).lean()

                        return res.json({
                            message: `Client ${validClient.clientId} found`,
                            Status_Reply: 'Success',
                            ClientId: validClient.clientId,
                            ClientRef: validClient.client_reference,
                            ClientFName: validClientName.client_firstname,
                            ClientSName: validClientName.client_surname
                        })

                    } else {

                        console.log('Invalid password')
                        return res.json({
                            message: 'Invalid password',
                            Status_Reply: 'Request failed'
                        })
                    }

                } else {
                    console.log('Dates are not equal  ', memDate, clientdte)
                    return res.json({
                        message: 'Invalid date',
                        Status_Reply: 'Request failed'
                    })
                }

            } else {
                return res.status(400).json({
                    message: `Memorable date or Password incorrect`,
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
            message: `Memorable date and Password does not match`,
            error
        })
    }
})

module.exports = {
    clientLogin
}
