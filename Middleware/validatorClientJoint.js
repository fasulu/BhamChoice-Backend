
const { body } = require('express-validator');

const ValidatorClientJoint =

    [
        
        body('clientId').notEmpty().trim().escape(),
        body('clientJoint_relationship').notEmpty().trim().escape().isLength({ min: 3, max: 15 }),
        body('clientJoint_title').notEmpty().trim().escape().isLength({ max: 10 }),
        body('clientJoint_firstname').notEmpty().trim().escape().isLength({ min: 3, max: 20 }),
        body('clientJoint_middlename').notEmpty().trim().escape(),
        body('clientJoint_surname').notEmpty().trim().escape().isLength({ min: 3, max: 20 }),
        body('clientJoint_namechange').notEmpty().trim().escape().isLength({ min: 2, max: 20 }),
        body('clientJoint_NINO').notEmpty().trim().escape().withMessage('must be in AB123456C format').isLength({min:9, max:9}),
        body('clientJoint_dateofbirth').notEmpty().trim().escape(),
        body('clientJoint_sex').notEmpty().trim().escape(),
        
        body('clientJoint_lived_abroad').notEmpty().trim().escape().isLength({max:3}),
        body('clientJoint_moved_to_current_address').notEmpty().trim().escape(),

        body('clientJoint_current_live_with_you').notEmpty().trim().escape().isLength({max:3}),
        body('clientJoint_livingin_different_address').notEmpty().trim().escape().isLength({max:29}),
        
        body('clientJoint_corres_postcode').trim().escape().isLength({ max: 8 }),
        body('clientJoint_corres_address_line1').trim().escape().isLength({ max: 75 }),
        body('clientJoint_corres_address_line2').trim().escape().isLength({ max: 75 }),
        body('clientJoint_corres_address_line3').trim().escape().isLength({ max: 75 }),
        body('clientJoint_corres_address_line4').trim().escape().isLength({ max: 75 }),
        
        body('clientJoint_placed_by_local_authority').notEmpty().trim().escape().isLength({min: 2,  max: 3 }),
        body('clientJoint_if_yes_local_authority').trim().escape().isLength({ max: 75 }),
        
        body('clientJoint_is_she_pregnant').notEmpty().trim().escape().isLength({ max: 3 }),
        body('clientJoint_delivery_date').trim().escape(),

        body('clientJoint_telephone_home').notEmpty().trim().escape().isLength({ min: 11 }),
        body('clientJoint_telephone_mobile').notEmpty().trim().escape().isLength({ min: 11 }),
        body('clientJoint_telephone_work').notEmpty().trim().escape().isLength({ min: 11 }),
        body('clientJoint_email').isEmail().notEmpty().trim().escape().isLength({ min: 9, max: 50 }),
        
        body('clientJoint_ethnicity').notEmpty().trim().escape().isLength({ max: 75 }),
        body('clientJoint_nationality').notEmpty().trim().escape().isLength({ max: 50 }),
        body('clientJoint_sex_orient').notEmpty().trim().escape().isLength({ max: 25 }),
        body('clientJoint_religion').notEmpty().trim().escape().isLength({ max: 50 }),
        body('clientJoint_illness').notEmpty().trim().escape().isLength({ max: 17 }),
        
        body('clientJoint_language_prefer').notEmpty().trim().escape().isLength({ max: 30 }),
        body('clientJoint_interpreter').notEmpty().trim().escape().isLength({ max: 3 }),
        
        body('clientJoint_current_tenure').notEmpty().trim().escape().isLength({ max: 50 }),
        body('clientJoint_current_tenure_bhamCouncilTenancyNum').trim().escape().isLength({ max: 25 }),
        
        body('clientJoint_from_which_country').notEmpty().trim().escape().isLength({ max: 150 }),
        body('clientJoint_are_you_worker').notEmpty().trim().escape().isLength({ max: 3 }),
        
        body('clientJoint_connection_to_birmingham').notEmpty().trim().escape().isLength({ max: 200 }),
        body('clientJoint_registration_date').notEmpty(),
        body('clientJoint_comments').notEmpty().trim().escape().isLength({ max: 500 }),
    ]

module.exports = {
    ValidatorClientJoint
};