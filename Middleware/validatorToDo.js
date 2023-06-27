
const { body } = require('express-validator');

const ValidatorToDo =

    [               
        body("toDoDate").not().isEmpty().escape().isString(),        
        body('toDoTask').not().isEmpty().isString().trim().escape().isLength({ min: 4, max: 25 }),
        body('toDoStatus').escape().isLength({ min: 4, max: 5 }),
        body('comments').not().isEmpty().trim().escape().isLength({ min: 4, max: 500 }),
    ]

module.exports = {
    ValidatorToDo
};