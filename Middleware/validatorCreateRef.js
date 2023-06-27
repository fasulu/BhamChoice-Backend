const { body } = require('express-validator');

const ValidatorCreateRef =

    [               
        body('client_reference').trim().escape().notEmpty(),
        body("client_password").not().isEmpty().trim().escape().isLength({ max: 150 }),        
        body('client_memorable_date').trim().escape(),
    ]
const ValidatorForgottenRef =

    [         
        body("client_email").not().isEmpty().trim().escape().isLength({ max: 150 }),        
        body('client_dateofbirth').trim().escape(),
    ]
const ValidatorForgottenPwd =

    [         
        body("client_email").not().isEmpty().trim().escape().isLength({ max: 150 }),        
        body('client_memorable_date').trim().escape(),
    ]

module.exports = {
    ValidatorCreateRef, 
    ValidatorForgottenRef,
    ValidatorForgottenPwd
};