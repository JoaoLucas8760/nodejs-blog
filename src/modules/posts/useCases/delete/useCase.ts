import { inject, injectable } from "tsyringe";

import { IPostsRepository } from "../../repositories/IPostsRepository";
import { IDeletePostDTO } from "../../dtos/IDeletePostDTO";
import { DeletePostError } from "./error";

@injectable()
export class DeletePostUseCase {
  constructor(
    @inject("PostsRepository")
    private postsRepository: IPostsRepository
  ) {}

  async execute({ user_id, post_id }: IDeletePostDTO) {
    const affectedRows = await this.postsRepository.delete({
      user_id,
      post_id,
    });

    if (affectedRows === 0) {
      throw new DeletePostError();
    }

    return;
  }
}
