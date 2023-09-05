import { inject, injectable } from "tsyringe";

import { IPostsRepository } from "../../repositories/IPostsRepository";

import { IUpdatePostDTO } from "../../dtos/IUpdatePostDTO";
import { UpdatePostError } from "./error";

@injectable()
export class UpdatePostUseCase {
  constructor(
    @inject("PostsRepository")
    private postsRepository: IPostsRepository
  ) {}

  async execute({ post_id, user_id, title, content }: IUpdatePostDTO) {
    const post = await this.postsRepository.update({
      user_id,
      post_id,
      title,
      content,
    });

    if (post == null) {
      throw new UpdatePostError();
    }

    return post;
  }
}
