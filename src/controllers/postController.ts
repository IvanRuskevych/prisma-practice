import { NextFunction, Request, Response } from 'express';

import { prismaClient } from '../prisma/prismaClient';

export const createPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const createdPost = await prismaClient.post.create({
      data: req.body,
    });

    res.status(201).json(createdPost);
  } catch (err) {
    next(err);
  }
};

export const getPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const posts = await prismaClient.post.findMany();
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};

export const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const deletedPost = await prismaClient.post.delete({
      where: { id: req.params.postId },
    });
    console.log('deletePost', deletedPost);
    res.status(200).json(deletedPost);
  } catch (err) {
    next(err);
  }
};
