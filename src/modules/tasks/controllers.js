import { getTasksByUserId, getTaskById, createTask, updateTask, deleteTask } from '../../models/task.js';

export const getTasks = async (req, res) => {
    const { userId } = req.params;
    const tasks = await getTasksByUserId(userId);
    res.json(tasks);
};

export const getTask = async (req, res) => {
    const { id } = req.params;
    const task = await getTaskById(id);
    res.json(task);
};

export const createTaskHandler = async (req, res) => {
    const { userId, title, description } = req.body;
    const task = await createTask(userId, title, description);
    res.status(201).json(task);
};

export const updateTaskHandler = async (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const task = await updateTask(id, title, description, completed);
    res.json(task);
};

export const deleteTaskHandler = async (req, res) => {
    const { id } = req.params;
    await deleteTask(id);
    res.status(204).end();
};