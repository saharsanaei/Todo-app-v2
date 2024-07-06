import express from 'express';
import dotenv from 'dotenv';
import cors from './core/middlewares/cors.js';
import { authMiddleware } from './core/middlewares/auth.js';
import notFound from './core/middlewares/notFound.js';
import logger from './core/middlewares/logger.js';
import userRoutes from './modules/users/routes.js';
import taskRoutes from './modules/tasks/routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors);
app.use(logger);

app.use('/api/users', authMiddleware, userRoutes);
app.use('/api/tasks', authMiddleware, taskRoutes);

app.use(notFound);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});