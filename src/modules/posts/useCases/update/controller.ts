import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdatePostUseCase } from "./useCase";

export class UpdatePostController {
  async execute(request: Request, response: Response) {
    const { id: user_id } = request.user;
    const { title, content } = request.body;
    const { post_id } = request.params;

    const updatePost = container.resolve(UpdatePostUseCase);

    const post = await updatePost.execute({
      user_id,
      post_id: post_id as string,
      title,
      content,
    });

    return response.status(200).json(post);
  }
}
