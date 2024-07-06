import { query } from '../../core/database/postgres-service';

// Get tasks by user ID
export const getTasksByUserId = async (userId) => {
  const result = await query('SELECT * FROM tasks WHERE user_id = $1', [userId]);
  return result.rows;
};

// Get task by ID
export const getTaskById = async (id) => {
  const result = await query('SELECT * FROM tasks WHERE id = $1', [id]);
  return result.rows[0];
};

// Create a new task
export const createTask = async (userId, title, description) => {
  const result = await query(
    'INSERT INTO tasks (user_id, title, description) VALUES ($1, $2, $3) RETURNING *',
    [userId, title, description]
  );
  return result.rows[0];
};

// Update task data
export const updateTask = async (id, title, description, is_completed) => {
  const result = await query(
    'UPDATE tasks SET title = $1, description = $2, is_completed = $3 WHERE id = $4 RETURNING *',
    [title, description, is_completed, id]
  );
  return result.rows[0];
};

// Delete a task
export const deleteTask = async (id) => {
  await query('DELETE FROM tasks WHERE id = $1', [id]);
};