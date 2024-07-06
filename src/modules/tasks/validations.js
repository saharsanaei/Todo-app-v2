import { check, validationResult } from 'express-validator';

// Validation rules for creating a task
export const validateTaskCreation = [
  check('userId').isInt().withMessage('User ID must be an integer'),
  check('title').notEmpty().withMessage('Title is required'),
  check('description').optional().isString().withMessage('Description must be a string'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

// Validation rules for updating a task
export const validateTaskUpdate = [
  check('title').optional().notEmpty().withMessage('Title is required'),
  check('description').optional().isString().withMessage('Description must be a string'),
  check('is_completed').optional().isBoolean().withMessage('Completion status must be a boolean'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];