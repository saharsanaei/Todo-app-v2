import supabase from '../../core/services/database.js';

export const getTasksByUserId = async (req, res) => {
  const { userId } = req.params;
  const { data, error } = await supabase.from('tasks').select('*').eq('user_id', userId);
  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(data);
};

export const getTaskById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from('tasks').select('*').eq('id', id).single();
  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(data);
};

export const createTask = async (req, res) => {
  const { data, error } = await supabase.from('tasks').insert([req.body]);
  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data[0]);
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from('tasks').update(req.body).eq('id', id);
  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(data[0]);
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from('tasks').delete().eq('id', id);
  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
};