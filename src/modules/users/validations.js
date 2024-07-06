import { check, validationResult } from 'express-validator';

// Validation rules for creating a user
export const validateUserCreation = [
  check('name').notEmpty().withMessage('Name is required'),
  check('email').isEmail().withMessage('Email is invalid'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

// Validation rules for updating a user
export const validateUserUpdate = [
  check('name').optional().notEmpty().withMessage('Name is required'),
  check('email').optional().isEmail().withMessage('Email is invalid'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];