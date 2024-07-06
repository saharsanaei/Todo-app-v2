import express from 'express';
import cors from 'cors';
import { getSecret } from './core/secrets/index.js';
import logger from './core/middlewares/logger.js';
import authMiddleware from './core/middlewares/auth.js';
import { notFound } from './core/middlewares/notFound.js';
import validate from './core/middlewares/validate.js';
import userRoutes from './modules/users/routes.js';
import taskRoutes from './modules/tasks/routes.js';

const app = express();
const port = getSecret('PORT') || 6543;

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware for CORS
app.use(cors());
// Middleware to log requests
app.use(logger);
// Middleware to authenticate requests
// app.use(authMiddleware);
// Middleware to handle not found routes
// app.use(notFound);
// Middleware to validate requests
app.use(validate);

// Routes
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

// Custom 404 middleware
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});