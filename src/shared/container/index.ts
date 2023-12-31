import { container } from "tsyringe";

import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/users/repositories/UsersRepository";

import { IPostsRepository } from "../../modules/posts/repositories/IPostsRepository";
import { PostsRepository } from "../../modules/posts/repositories/PostsRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IPostsRepository>(
  "PostsRepository",
  PostsRepository
);
