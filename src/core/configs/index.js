import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT || 6543,
  db: {
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
  },
};

export default config;