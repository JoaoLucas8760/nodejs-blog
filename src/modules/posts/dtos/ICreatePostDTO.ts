import { Post } from "../entities/Post";

export type ICreatePostDTO = Pick<Post, "user_id" | "title" | "content">;
