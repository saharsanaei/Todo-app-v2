import express from 'express';
import { getTasksByUserId, getTaskById, createTask, updateTask, deleteTask } from './controllers.js';

const router = express.Router();

router.get('/user/:userId', getTasksByUserId);
router.get('/:id', getTaskById);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;