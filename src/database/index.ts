import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../modules/users/entities/User";

import { Post } from "../modules/posts/entities/Post";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: false,
  entities: [User, Post],
  migrations: [],
  subscribers: [],
});

AppDataSource.initialize();
