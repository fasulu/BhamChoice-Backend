
const { body } = require('express-validator');

const ValidatorMessage =

    [               
        // body("messageDate").not().isEmpty().escape().isDate(),        
        body("messageDate").not().isEmpty().escape().isString(),        
        body('messageSubject').not().isEmpty().isString().trim().escape().isLength({ min: 4, max: 50 }),
        body('messageFrom').escape().isLength({ min: 4, max: 25 }),
        body('message').not().isEmpty().trim().escape().isLength({ min: 4, max: 500 }),
        body('messageStatus').escape().isLength({ min: 4, max: 5 }),
    ]

module.exports = {
    ValidatorMessage
};