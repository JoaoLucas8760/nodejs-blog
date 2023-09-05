import { FindManyOptions, Repository } from "typeorm";

import { Post } from "../entities/Post";

import { IPostsRepository } from "./IPostsRepository";
import { AppDataSource } from "../../../database";
import { IUpdatePostDTO } from "../dtos/IUpdatePostDTO";
import { ICreatePostDTO } from "../dtos/ICreatePostDTO";
import { IDeletePostDTO } from "../dtos/IDeletePostDTO";
import { IListPostDTO } from "../dtos/IListPostDTO";

export class PostsRepository implements IPostsRepository {
  private repository: Repository<Post>;

  constructor() {
    this.repository = AppDataSource.getRepository(Post);
  }

  async create({ user_id, title, content }: ICreatePostDTO) {
    const post = this.repository.create({
      user_id,
      title,
      content,
    });

    return this.repository.save(post);
  }

  async update({ user_id, post_id, title, content }: IUpdatePostDTO) {
    const post = await this.repository.findOneBy({
      id: post_id,
      user_id,
    });

    if (post == null) {
      return null;
    }

    return await this.repository.save({ ...post, title, content });
  }

  async delete({ user_id, post_id }: IDeletePostDTO) {
    const deleteResult = await this.repository.delete({ id: post_id, user_id });

    return deleteResult.affected;
  }

  async get(post_id: string) {
    const post = await this.repository
      .createQueryBuilder("posts")
      .innerJoin("posts.user", "user")
      .addSelect(["user.name", "user.email"])
      .where("posts.id = :post_id", { post_id })
      .getOne();
    return post;
  }

  async list({ order = "DESC", user_id }: IListPostDTO) {
    const queryBuilder = this.repository
      .createQueryBuilder("posts")
      .innerJoin("posts.user", "user")
      .addSelect(["user.name", "user.email"])
      .orderBy("posts.updated_at", order);

    if (user_id != null) {
      return await queryBuilder
        .where("user_id = :user_id", { user_id })
        .getMany();
    } else {
      return await queryBuilder.getMany();
    }
  }
}
