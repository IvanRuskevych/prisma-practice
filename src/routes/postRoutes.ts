import { Router } from 'express';

import { isExistMiddleware } from '../middleware';
import { createPost, deletePost, getPosts } from '../controllers/postController';

const router = Router();

router.post('/posts', createPost);
router.delete('/posts/:id', isExistMiddleware('post', 'id'), deletePost);
router.get('/posts', getPosts);

export default router;
