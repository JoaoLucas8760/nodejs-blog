import { inject, injectable } from "tsyringe";

import { IPostsRepository } from "../../repositories/IPostsRepository";
import { GetPostError } from "./error";

@injectable()
export class GetPostUseCase {
  constructor(
    @inject("PostsRepository")
    private postsRepository: IPostsRepository
  ) {}

  async execute(post_id: string) {
    const post = await this.postsRepository.get(post_id);

    if (post == null) {
      throw new GetPostError();
    }

    return post;
  }
}
