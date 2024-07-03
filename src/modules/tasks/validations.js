import { body, param } from 'express-validator';

export const taskIdValidation = [
    param('id').isInt().withMessage('Task ID must be an integer')
];

export const taskValidation = [
    body('userId').isInt().withMessage('User ID must be an integer'),
    body('title').isString().withMessage('Title must be a string'),
    body('description').optional().isString().withMessage('Description must be a string'),
    body('completed').optional().isBoolean().withMessage('Completed must be a boolean')
];