import { Post } from "../entities/Post";

export type IUpdatePostDTO = Pick<Post, "user_id" | "title" | "content"> & {
  post_id: string;
};
