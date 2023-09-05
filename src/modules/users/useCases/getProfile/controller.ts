import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetUserProfileUseCase } from "./useCase";

export class GetUserProfileController {
  async execute(request: Request, response: Response) {
    const { id } = request.user;

    const getUserProfile = container.resolve(GetUserProfileUseCase);

    const user = await getUserProfile.execute(id);

    return response.json(user);
  }
}
