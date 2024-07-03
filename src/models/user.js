import { pool } from '../core/configs/database.js';

export const getUserById = async (id) => {
    const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return rows[0];
};

export const createUser = async (name, email) => {
    const { rows } = await pool.query(
        'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
        [name, email]
    );
    return rows[0];
};

export const updateUser = async (id, name, email) => {
    const { rows } = await pool.query(
        'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
        [name, email, id]
    );
    return rows[0];
};