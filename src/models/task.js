import { pool } from '../core/configs/database.js';

export const getTasksByUserId = async (userId) => {
    const { rows } = await pool.query('SELECT * FROM tasks WHERE user_id = $1', [userId]);
    return rows;
};

export const getTaskById = async (id) => {
    const { rows } = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
    return rows[0];
};

export const createTask = async (userId, title, description) => {
    const { rows } = await pool.query(
        'INSERT INTO tasks (user_id, title, description) VALUES ($1, $2, $3) RETURNING *',
        [userId, title, description]
    );
    return rows[0];
};

export const updateTask = async (id, title, description, completed) => {
    const { rows } = await pool.query(
        'UPDATE tasks SET title = $1, description = $2, completed = $3 WHERE id = $4 RETURNING *',
        [title, description, completed, id]
    );
    return rows[0];
};

export const deleteTask = async (id) => {
    await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
    return true;
};