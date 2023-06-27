
const { body } = require('express-validator');

const ValidatorMisc =

    [
        
        body('langKey').notEmpty().trim().isLength({ max: 2 }).escape(),
        body('language').notEmpty().isString().trim().isLength({ max: 40 }).escape(),
        body('tenureKey').notEmpty().trim().isLength({ max: 2 }).escape(),
        body('tenure').notEmpty().isString().trim().isLength({ max: 40 }).escape(),
        body('beliefKey').notEmpty().trim().isLength({ max: 2 }).escape(),
        body('belief').notEmpty().isString().trim().isLength({ max: 50 }).escape(),
        body('sexOrientKey').notEmpty().trim().isLength({ max: 2 }).escape(),
        body('sexOrient').notEmpty().isString().trim().isLength({ max: 50 }).escape(),
        body('nationalityKey').notEmpty().trim().isLength({ max: 2 }).escape(),
        body('nationality').notEmpty().isString().trim().isLength({ max: 50 }).escape(),
        body('ethnicityKey').notEmpty().trim().isLength({ max: 2 }).escape(),
        body('ethnicity').notEmpty().isString().trim().isLength({ max: 50 }).escape(),
        body('correspondenceKey').notEmpty().trim().isLength({ max: 2 }).escape(),
        body('correspondence').notEmpty().isString().trim().isLength({ max: 50 }).escape(),
        body('areYouKey').notEmpty().trim().isLength({ max: 2 }).escape(),
        body('areYou').notEmpty().isString().trim().isLength({ max: 125 }).escape(),

    ]

module.exports = {
    ValidatorMisc
};