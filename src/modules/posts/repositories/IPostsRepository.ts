import { ICreatePostDTO } from "../dtos/ICreatePostDTO";
import { IDeletePostDTO } from "../dtos/IDeletePostDTO";
import { IListPostDTO } from "../dtos/IListPostDTO";
import { IUpdatePostDTO } from "../dtos/IUpdatePostDTO";
import { Post } from "../entities/Post";

export interface IPostsRepository {
  create: (data: ICreatePostDTO) => Promise<Post>;
  update: (data: IUpdatePostDTO) => Promise<Post>;
  delete: (data: IDeletePostDTO) => Promise<number>;
  get: (post_id: string) => Promise<Post>;
  list: (data: IListPostDTO) => Promise<Post[]>;
}
