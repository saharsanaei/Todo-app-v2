import supabase from '../../core/services/database.js';

export const getUserById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from('users').select('*').eq('id', id).single();
  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(data);
};

export const createUser = async (req, res) => {
  const { data, error } = await supabase.from('users').insert([req.body]);
  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data[0]);
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from('users').update(req.body).eq('id', id);
  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(data[0]);
};