import express from 'express';
import { getUserById, createUser, updateUser } from './controllers.js';

const router = express.Router();

router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);

export default router;