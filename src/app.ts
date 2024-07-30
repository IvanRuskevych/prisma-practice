import express from 'express';

import postsRouter from './routes/postRoutes';
import { globalErrorHandler, routesErrorHandler } from './middleware';

// imports middlewares
import './middleware/softDeletePostsMiddleware';
import './exceptions/PrismaErrors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', postsRouter);

// Errors handling
app.use(routesErrorHandler);
app.use(globalErrorHandler);

export default app;
