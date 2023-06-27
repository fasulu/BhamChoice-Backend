
const { body } = require('express-validator');

const ValidatorBid =

    [               
        body("propertyId").not().isEmpty().trim().escape().isLength({ min: 4, max: 7 }),        
        body('bidPosition').not().isEmpty().isNumeric().trim().escape(),
        body('bidDate').escape(),
    ]

module.exports = {
    ValidatorBid
};