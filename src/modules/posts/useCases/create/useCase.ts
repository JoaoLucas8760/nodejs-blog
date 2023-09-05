import { inject, injectable } from "tsyringe";

import { IPostsRepository } from "../../repositories/IPostsRepository";
import { ICreatePostDTO } from "../../dtos/ICreatePostDTO";

@injectable()
export class CreatePostUseCase {
  constructor(
    @inject("PostsRepository")
    private postsRepository: IPostsRepository
  ) {}

  async execute({ user_id, title, content }: ICreatePostDTO) {
    const post = await this.postsRepository.create({
      user_id,
      title,
      content,
    });

    return post;
  }
}
