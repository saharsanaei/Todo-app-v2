import { Pool } from 'pg';
import { getSecret } from '../secrets/index.s';

const pool = new Pool({
  host: getSecret('PGHOST'),
  database: getSecret('PGDATABASE'),
  user: getSecret('PGUSER'),
  password: getSecret('PGPASSWORD'),
});

export const query = (text, params) => pool.query(text, params);