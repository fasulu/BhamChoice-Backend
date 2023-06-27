
const { body } = require('express-validator');

const ValidatorClient =

    [
        
        body('client_title').notEmpty().trim().escape().isLength({ min: 1, max: 1 }),
        body('client_firstname').notEmpty().trim().escape().isLength({ min: 3, max: 20 }),
        body('client_middlename').notEmpty().trim().escape(),
        body('client_surname').notEmpty().trim().escape().isLength({ min: 3, max: 20 }),
        body('client_namechange').notEmpty().trim().escape().isLength({ min: 3, max: 20 }),
        body('client_NINO').notEmpty().trim().escape().withMessage('must be in AB123456C format').isLength({min:9, max:9}),
        body('client_dateofbirth').notEmpty().trim().escape(),
        body('client_sex').notEmpty().trim().escape(),

        body('client_lived_abroad').notEmpty().trim().escape().isLength({max:3}),
        body('client_moved_to_current_address').notEmpty().trim().escape(),
        
        body('client_postcode').notEmpty().trim().escape().isLength({ max: 8 }),
        body('client_address_line1').notEmpty().trim().escape().isLength({ max: 75 }),
        body('client_address_line2').notEmpty().trim().escape().isLength({ max: 75 }),
        body('client_address_line3').notEmpty().trim().escape().isLength({ max: 75 }),
        body('client_address_line4').notEmpty().trim().escape().isLength({ max: 75 }),        

        body('client_is_rented_property').notEmpty().trim().escape().isLength({ max: 3 }),        
        body('client_landlord_name').trim().escape(),
        body('client_landlord_address').trim().escape().isLength({ max: 200 }),        
        body('client_landlord_tenancy_type').trim().escape().isLength({ max: 75 }),        
        body('client_landlord_info_about_this_address').trim().escape().isLength({ max: 500 }),
        
        body('client_communication_address').notEmpty().trim().escape().isLength({ min: 15, max: 22 }),
        body('client_correspondence_type').trim().escape().isLength({ max: 15 }),
        body('client_correspondence_postcode').trim().escape(),
        body('client_correspondence_address_line1').trim().escape().isLength({ max: 75 }),
        body('client_correspondence_address_line2').trim().escape().isLength({ max: 75 }),
        body('client_correspondence_address_line3').trim().escape().isLength({ max: 75 }),
        body('client_correspondence_address_line4').trim().escape().isLength({ max: 75 }),
        
        body('client_placed_by_local_authority').trim().escape().isLength({ min: 2, max: 3 }),
        body('client_if_yes_local_authority').trim().escape().isLength({ min: 4, max: 75 }),
        
        body('client_telephone_home').notEmpty().trim().escape().isLength({ min: 11 }),
        body('client_telephone_mobile').notEmpty().trim().escape().isLength({ min: 11 }),
        body('client_telephone_work').notEmpty().trim().escape().isLength({ min: 11 }),
        body('client_email').notEmpty().trim().escape().isLength({ min: 9, max: 50 }),
        
        body('client_ethnicity').notEmpty().trim().escape().isLength({ max: 75 }),
        body('client_nationality').notEmpty().trim().escape().isLength({ max: 50 }),
        body('client_sex_orient').notEmpty().trim().escape().isLength({ max: 25 }),
        body('client_religion').notEmpty().trim().escape().isLength({ max: 50 }),
        body('client_illness').notEmpty().trim().escape().isLength({ max: 17 }),
        
        body('client_language_prefer').notEmpty().trim().escape().isLength({ max: 30 }),
        body('client_interpreter').notEmpty().trim().escape().isLength({ max: 3 }),
        
        body('client_current_tenure').trim().escape().isLength({ max: 50 }),
        body('client_current_tenure_bhamCouncilTenancyNum').trim().escape(),
        
        body('client_from_which_country').notEmpty().trim().escape().isLength({ max: 150 }),  // check here
        body('client_connection_to_birmingham').notEmpty().trim().escape().isLength({ max: 200 }),
        
        // body("client_password").notEmpty().trim().escape().isLength({ max: 150 }),        
        // body('client_memorable_date').notEmpty(),
        
        body('client_registration_date').notEmpty(),
        body('client_status').notEmpty(),
        
        body('client_comments').notEmpty().trim().escape().isLength({ max: 500 }),
    ]

module.exports = {
    ValidatorClient
};