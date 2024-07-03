import dotenv from 'dotenv';

dotenv.config();

export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader === `Bearer ${process.env.AUTH_KEY}`) {
        next();
    } else {
        res.status(403).json({ message: 'Forbidden' });
    }
};