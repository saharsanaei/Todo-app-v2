import dotenv from 'dotenv';

dotenv.config();

export const getSecret = (key) => {
    return process.env[key];
};