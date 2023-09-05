import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListPostUseCase } from "./useCase";
import { IListPostDTO } from "../../dtos/IListPostDTO";

type QueryParams = {
  order?: "ASC" | "DESC";
  own: "true" | "false";
};

export class ListPostController {
  async execute(request: Request, response: Response) {
    const { order, own } = request.query as QueryParams;
    const { id } = request.user;

    const listPosts = container.resolve(ListPostUseCase);

    const posts = await listPosts.execute({
      user_id: Boolean(own) ? id : null,
      order,
    });

    return response.status(200).json(posts);
  }
}
