const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');

const clientReferenceModel = require('../../Model/clientReferenceModel');
const clientModel = require('../../Model/clientModel');
const { CreatePwd } = require('../../Utility/createPwd');

const forgottenPwd = (async (req, res) => {

    const errorVal = validationResult(req);

    const clientEmail = req.body.client_email
    const clientMDate = req.body.client_memorable_date;

    console.log(`body value ${clientEmail}, ${clientMDate}`)

    try {

        if (errorVal.isEmpty()) {

            console.log("No Error during Validation");

            const validClient = await clientModel.findOne({ client_email: clientEmail }).select({
                _id: 1,
                client_email: 1,
                client_firstname: 1,
                client_surname: 1
            }).lean()

            console.log(validClient)

            if (validClient) {
                const email = validClient.client_email == clientEmail ? true : false;
                const clientfound = validClient._id.toString()
                if (email) {

                    console.log(email, clientfound)
                    const validClientID = await clientReferenceModel.findOne({ clientId: clientfound }).select({
                        client_memorable_date: 1
                    }).lean()

                    console.log(validClientID.client_memorable_date)

                    if (validClientID) {
                        const validMemoDate = validClientID.client_memorable_date == clientMDate ? true : false;
                        if (validMemoDate) {

                            console.log(`valid date `, validClientID.client_memorable_date, clientMDate);

                            // create a new password 
                            const newPwd = CreatePwd();

                            return res.json({
                                message: `New password`,
                                Status_Reply: 'Success',
                                NewPwd: newPwd,
                                ClientName: (validClient.client_firstname + " " + validClient.client_surname)
                                // ClientName: (validClient.client_firstname + " " + validClient.client_surname)
                            })
                        } else {
                            return res.json({
                                message: `Email or date of birth does not match`,
                                Status_Reply: 'Request failed\nEmail or date of birth does not match'
                            })
                        }
                    } else {
                        console.log('Invalid email')
                        return res.json({
                            message: 'Invalid email',
                            Status_Reply: 'Request failed'
                        })
                    }
                } else {
                    return res.json({
                        message: `Email or memorable date does not match`,
                        Status_Reply: 'Request failed\nEmail or date of birth does not match'
                    })
                }
            } else {
                return res.json({
                    message: `Email or memorable date does not match`,
                    Status_Reply: 'Request failed\nEmail or date of birth does not match'
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
    forgottenPwd
}
