import express from 'express';
import { getTasks, getTask, createTaskHandler, updateTaskHandler, deleteTaskHandler } from './controllers.js';
import { taskIdValidation, taskValidation } from './validations.js';
import { authMiddleware } from '../../core/middlewares/auth.js';
import { validate } from '../../core/middlewares/validate.js';

const router = express.Router();

router.get('/user/:userId', authMiddleware, taskIdValidation, validate, getTasks);
router.get('/:id', authMiddleware, taskIdValidation, validate, getTask);
router.post('/', authMiddleware, taskValidation, validate, createTaskHandler);
router.put('/:id', authMiddleware, taskIdValidation, taskValidation, validate, updateTaskHandler);
router.delete('/:id', authMiddleware, taskIdValidation, validate, deleteTaskHandler);

export default router;