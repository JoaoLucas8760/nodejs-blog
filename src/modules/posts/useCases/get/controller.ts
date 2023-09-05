import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetPostUseCase } from "./useCase";

export class GetPostController {
  async execute(request: Request, response: Response) {
    const { post_id } = request.params;

    const getPost = container.resolve(GetPostUseCase);

    const post = await getPost.execute(post_id as string);

    return response.status(200).json(post);
  }
}
