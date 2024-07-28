import { Router } from 'express';
import { createPost, deletePost, getPosts } from '../controllers/postController';

const router = Router();

router.post('/posts', createPost);
router.delete('/posts/:postId', deletePost);
router.get('/posts', getPosts);

export default router;
