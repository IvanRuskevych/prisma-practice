// //  ver #1 with type any
// export type ModelDelegate = {
//   findUnique: (args: { where: { id: string } }) => Promise<unknown>;
// };

// ver #2 without type any
import { Post, User } from '@prisma/client';

export type ModelDelegate<T> = {
  findUnique: (args: { where: { id: string } }) => Promise<T | null>;
};

export type ModelDelegates = {
  user: ModelDelegate<User>;
  post: ModelDelegate<Post>;
};
