import express from 'express';
import { getUser, createUserHandler, updateUserHandler } from './controllers.js';
import { userIdValidation, userValidation } from './validations.js';
import { authMiddleware } from '../../core/middlewares/auth.js';
import { validate } from '../../core/middlewares/validate.js';

const router = express.Router();

router.get('/:id', authMiddleware, userIdValidation, validate, getUser);
router.post('/', authMiddleware, userValidation, validate, createUserHandler);
router.put('/:id', authMiddleware, userIdValidation, userValidation, validate, updateUserHandler);

export default router;