import jwt from 'jsonwebtoken';
import { getSecret } from '../secrets/index.js';

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  try {
    const decoded = jwt.verify(token, getSecret('AUTH_TOKEN'));
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Forbidden' });
  }
};

export default authMiddleware;