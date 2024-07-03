import { getUserById, createUser, updateUser } from '../../models/user.js';

export const getUser = async (req, res) => {
    const { id } = req.params;
    const user = await getUserById(id);
    res.json(user);
};

export const createUserHandler = async (req, res) => {
    const { name, email } = req.body;
    const user = await createUser(name, email);
    res.status(201).json(user);
};

export const updateUserHandler = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = await updateUser(id, name, email);
    res.json(user);
};