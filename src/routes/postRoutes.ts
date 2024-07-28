import { Router } from 'express';
import { createPost, deletePost, getPosts } from '../controllers/postController';
import { isExistMware } from '../middleware';

const router = Router();

router.post('/posts', createPost);
router.delete('/posts/:id', isExistMware('id'), deletePost);
router.get('/posts', getPosts);

export default router;
