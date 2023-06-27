
const { validationResult } = require('express-validator');  // to process error results

const bcrypt = require('bcryptjs');

const clientModel = require('../../Model/clientModel');
const clientReferenceModel = require('../../Model/clientReferenceModel');

const createClientRef = (async (req, res) => {

    const errorVal = validationResult(req);
    
    var _Id;
    const firstname = req.body.client_firstname;
    const surname = req.body.client_surname;
    const nino = req.body.client_NINO;
    const password = req.body.client_password
    const memo_Date = req.body.client_memorable_date;
    
    console.log(`${firstname},
    ${surname},
    ${password},
    ${nino},
    ${memo_Date}`);
    
    // create new reference number based on first and surname with random number
    const min = 28579;
    const max = 96765;
    const rand = min + Math.random() * (max - min);
    const loginRef = firstname.slice(0, 1) + surname.slice(0, 1) + parseInt(rand);
    console.log(`New login reference ${loginRef}`)

    const passwordHashed = bcrypt.hashSync(password);

    console.log(` ${password},
    ${loginRef},
    ${passwordHashed}`);

    try {
        const NINOInClientCollectionExist = await clientModel.findOne({ client_NINO: nino.toLowerCase() }).select(
            {
                client_NINO: 1,
                _id: 1
            }
        ).lean()

        console.log(NINOInClientCollectionExist)

        _Id = NINOInClientCollectionExist._id;

        if (NINOInClientCollectionExist) {
            const clientRef = await clientReferenceModel.create([
                {
                    clientId: _Id,
                    client_reference: loginRef,
                    client_password: passwordHashed,
                    client_memorable_date: memo_Date
                }])
            console.log("Client reference", clientRef)
            return res.json({
                message: `Client reference created successfully`,
                Status_Reply:"Success",
                ClientRef: loginRef,
            })
        }
    } catch (error) {
        console.log("Error in creating login reference number", error)
    }
})

module.exports = {
    createClientRef
}
