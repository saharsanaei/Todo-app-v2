import { query } from '../../core/database/postgres-service';

// Get user by ID
export const getUserById = async (id) => {
  const result = await query('SELECT * FROM users WHERE id = $1', [id]);
  return result.rows[0];
};

// Create a new user
export const createUser = async (name, email) => {
  const result = await query(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
    [name, email]
  );
  return result.rows[0];
};

// Update user data
export const updateUser = async (id, name, email) => {
  const result = await query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
    [name, email, id]
  );
  return result.rows[0];
};