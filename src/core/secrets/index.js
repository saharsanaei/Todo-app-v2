import dotenv from 'dotenv';

dotenv.config();

export const AUTH_TOKEN = process.env.AUTH_TOKEN;
export const SUPABASE_URL = process.env.SUPABASE_URL;
export const SUPABASE_KEY = process.env.SUPABASE_KEY;