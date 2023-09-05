import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePostUseCase } from "./useCase";

export class CreatePostController {
  async execute(request: Request, response: Response) {
    const { id: user_id } = request.user;
    const { title, content } = request.body;

    const createPost = container.resolve(CreatePostUseCase);

    const post = await createPost.execute({
      user_id,
      title,
      content,
    });

    return response.status(201).json(post);
  }
}
