import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeletePostUseCase } from "./useCase";

export class DeletePostController {
  async execute(request: Request, response: Response) {
    const { id: user_id } = request.user;
    const { post_id } = request.params;

    const deletePost = container.resolve(DeletePostUseCase);

    await deletePost.execute({
      post_id: post_id as string,
      user_id,
    });

    return response.status(204).send();
  }
}
