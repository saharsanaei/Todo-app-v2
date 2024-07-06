import db from '../../core/services/database.js';

const getTasksByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await db.query('SELECT * FROM tasks WHERE user_id = $1', [userId]);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('SELECT * FROM tasks WHERE id = $1', [id]);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTask = async (req, res) => {
  const { user_id, title, description, is_completed } = req.body;
  try {
    const result = await db.query('INSERT INTO tasks (user_id, title, description, is_completed) VALUES ($1, $2, $3, $4) RETURNING *', [user_id, title, description, is_completed]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { user_id, title, description, is_completed } = req.body;
  try {
    const result = await db.query('UPDATE tasks SET user_id = $1, title = $2, description = $3, is_completed = $4 WHERE id = $5 RETURNING *', [user_id, title, description, is_completed, id]);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM tasks WHERE id = $1', [id]);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getTasksByUserId, getTaskById, createTask, updateTask, deleteTask };