import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './modules/users/routes.js';
import taskRoutes from './modules/tasks/routes.js';
import { logger } from './core/middlewares/logger.js';
import { notFound } from './core/middlewares/notFound.js';
import { enableCors } from './core/middlewares/cors.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(logger);
app.use(enableCors);

app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

app.use(notFound);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});