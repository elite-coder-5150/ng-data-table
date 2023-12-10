const { check, validationResult } = require('express-validator');

export const validate = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    next();
};

export const validateUser = [
    check('u_id')
        .isRequired()
        .isEmpty()
        .withMessage('User id is required'),

    check('name')
        .isEmpty()
        .withMessage('Name is required')
        .isLength({ min: 3, max: 12 })
        .withMessage('Name must be at lease 3 characters in length and less than 12 characters'),

    check('email_addr')
        .isEmail()
        .withMessage('Email is required')
        .isLength({ min: 3, max: 12 })
        .withMessage('Email must be at lease 3 characters in length and less than 12'),

    check('role')
        .isRequired()
        .withMessage('Role is required'),

    check('teams')
        .isRequired()
        .withMessage('Teams is required'),

    check('status')
        .isRequired()
        .withMessage('Status is required'),

    check('profile_pic_url')
        .isRequired()
        .withMessage('ProfilePicUrl is required'),
        
    check('password')
        .isLength({ min: 3, max: 12 })
        .withMessage('Password must be at least 3 characters in length and less than 12'),

    check('confPassword')
        .custom((value, {req}) => {
            if (value !== req.body.password) {
                throw new Error('password do not match');
            }

            return true;
        }),

    validate()
]