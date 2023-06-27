
const { body } = require('express-validator');

const ValidatorClientOtherHousehold =

    [

        body('clientId').notEmpty().trim().escape(),        
        body('clientOtherHousehold_relationshipWithClient').notEmpty().trim().escape().isLength({ min: 3, max: 8 }),
        body('clientOtherHousehold_assessment_purpose_only').notEmpty().trim().escape().isLength({ min: 2, max:3 }),
        body('clientOtherHousehold_title').notEmpty().trim().escape().isLength({ min: 2, max: 4 }),
        body('clientOtherHousehold_firstname').notEmpty().trim().escape().isLength({ min: 3, max: 20 }),
        body('clientOtherHousehold_middlename').trim().escape(),
        body('clientOtherHousehold_surname').notEmpty().trim().escape().isLength({ min: 3, max: 20 }),
        body('clientOtherHousehold_namechange').notEmpty().trim().escape().isLength({ min: 2, max: 20 }),
        body('clientOtherHousehold_NINO').trim().escape(),
        body('clientOtherHousehold_dateofbirth').notEmpty().trim().escape(),
        body('clientOtherHousehold_sex').notEmpty().trim().escape().isLength({ min: 3, max: 14 }),

        body('clientOtherHousehold_live_with_you').notEmpty().trim().escape().isLength({max:3}),
        body('clientOtherHousehold_moved_to_current_address').notEmpty().trim().escape(),

        body('clientOtherHousehold_current_address').notEmpty().trim().escape(),

        body('clientOtherHousehold_placed_by_local_authority').notEmpty().trim().escape().isLength({ min:2, max: 3 }),
        body('clientOtherHousehold_if_yes_local_authority').notEmpty().trim().escape().isLength({ min: 4, max: 75 }),
        
        body('clientOtherHousehold_is_she_pregnant').notEmpty().trim().escape().isLength({ min:2, max: 3 }),
        body('clientOtherHousehold_delivery_date').trim().escape(),
        body('clientOtherHousehold_spouse_another_member_name').trim().escape().isLength({ max: 75 }),
        
        body('clientOtherHousehold_telephone_home').trim().escape(),
        body('clientOtherHousehold_telephone_mobile').trim().escape(),
        body('clientOtherHousehold_telephone_work').trim().escape(),
        body('clientOtherHousehold_email').isString().trim().escape(),
        
        body('clientOtherHousehold_ethnicity').notEmpty().trim().escape().isLength({ max: 75 }),
        body('clientOtherHousehold_nationality').notEmpty().trim().escape().isLength({ max: 50 }),
        body('clientOtherHousehold_sex_orient').notEmpty().trim().escape().isLength({ max: 25 }),
        body('clientOtherHousehold_religion').notEmpty().trim().escape().isLength({ max: 50 }),
        body('clientOtherHousehold_illness').notEmpty().trim().escape().isLength({ max: 17 }),        
        body('clientOtherHousehold_are_you_worker').notEmpty().trim().escape().isLength({ min:2, max: 3 }),
        
        body('clientOtherHousehold_registration_date').notEmpty(),
        body('clientOtherHousehold_comments').notEmpty().trim().escape().isLength({ max: 500 }),
    ]

module.exports = {
    ValidatorClientOtherHousehold
};