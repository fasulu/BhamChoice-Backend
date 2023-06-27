
const { validationResult } = require('express-validator');  // to process error results

const bcrypt = require('bcryptjs');     // to crypt sensible datas

const clientModel = require('../../Model/clientModel');
const clientReference = require('../../Model/clientReference');

const createClientRef = (async (req, res) => {

    const errorVal = validationResult(req);

    if (!errorVal.isEmpty()) {

        console.log("Error during Validation");
        return res.json({ errors: errorVal.array() });
    } else {
        console.log("No Error during Validation");
    }

    const clientid = req.body.clientId
    const login_reference = req.body.client_reference
    const password = req.body.client_password
    const memorable_date = req.body.client_memorable_date

    // create new reference number based on first and surname with random number
    // const min = 28579;
    // const max = 96765;
    // const rand = min + Math.random() * (max - min);
    // const loginRef = firstname.slice(0, 1) + surname.slice(0, 1) + parseInt(rand);
    // console.log(`New login referenc is ${loginRef}`)

    console.log(clientid, login_reference, password, memorable_date)

    if (errorVal.isEmpty()) {

        console.log("No Error during Validation")

        try {

            // check whether the clientId is exist
            const idInClientExist = await clientModel.findOne({ _id: clientid }).select(
                {
                    _id: 1
                }
            ).lean()
            const idInClientLoginExist = await clientReference.findOne({ clientId: clientid }).select(
                {
                    clientId: 1
                }
            ).lean()

            const passwordHashed = bcrypt.hashSync(password)       // crypts given password in to Bearer Token
            console.log(`client id in client collection ${idInClientExist._id}`)
            console.log(`client id in clientlogin collection ${idInClientLoginExist.clientId}`)
            console.log(passwordHashed);

            // create new document in client collection
            // if client already exist in clientLogin, donot create duplicate login reference number
            if ((idInClientExist && !idInClientLoginExist)) {
                const clientRef = await clientReference.create([
                    {
                        clientId: clientid,
                        client_reference: login_reference,
                        client_password: passwordHashed,
                        client_memorable_date: memorable_date,
                    }])

                return res.json({
                    message: "Client reference created successfully",
                    clientRef
                })
            } else {
                return res.json({
                    message: "Unable to create client reference, please contact administrator",
                    clientRef
                })
            }

        } catch (error) {

            return res.json({
                message: `Duplicate entry, unable to proceed, please contact administrator`, error
            })
        }
    }
})

module.exports = {
    createClientRef
}
