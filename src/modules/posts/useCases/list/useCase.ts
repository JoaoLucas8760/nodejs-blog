import { inject, injectable } from "tsyringe";

import { IPostsRepository } from "../../repositories/IPostsRepository";
import { IListPostDTO } from "../../dtos/IListPostDTO";

@injectable()
export class ListPostUseCase {
  constructor(
    @inject("PostsRepository")
    private postsRepository: IPostsRepository
  ) {}

  async execute({ user_id, order }: IListPostDTO) {
    const post = await this.postsRepository.list({ user_id, order });

    return post;
  }
}
