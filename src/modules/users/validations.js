import { body, param } from 'express-validator';

export const userIdValidation = [
    param('id').isInt().withMessage('User ID must be an integer')
];

export const userValidation = [
    body('name').isString().withMessage('Name must be a string'),
    body('email').isEmail().withMessage('Email must be valid')
];