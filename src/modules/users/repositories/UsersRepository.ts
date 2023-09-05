import { getRepository, Repository } from "typeorm";

import { User } from "../entities/User";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUsersRepository } from "./IUsersRepository";
import { AppDataSource } from "../../../database";

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.repository.findOneBy({
      email,
    });
  }

  async findById(user_id: string): Promise<User | undefined> {
    return this.repository.findOneBy({ id: user_id });
  }

  async create({ name, email, password }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({ name, email, password });

    return this.repository.save(user);
  }
}
