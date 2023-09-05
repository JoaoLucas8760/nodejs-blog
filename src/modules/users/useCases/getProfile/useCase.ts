import { injectable, inject } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";
import { GetUserProfileError } from "./error";

@injectable()
export class GetUserProfileUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(user_id: string) {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new GetUserProfileError();
    }

    return user;
  }
}
