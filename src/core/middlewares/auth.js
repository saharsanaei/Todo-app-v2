import { AUTH_TOKEN } from '../secrets/index.js';

export const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (token === AUTH_TOKEN) {
        next();
    } else {
        res.status(403).json({ message: 'Forbidden' });
    }
};