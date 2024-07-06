import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_KEY } from '../secrets/index.js';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;