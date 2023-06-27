
const { body } = require('express-validator');

const ValidatorClientRef =

    [               
        body('client_reference').trim().escape().notEmpty().isLength({ min:7, max: 7 }).withMessage('must be in AB12345 format'),
    ]

module.exports = {
    ValidatorClientRef
};