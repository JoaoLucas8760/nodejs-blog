import { Router } from "express";

import { CreateUserController } from "../modules/users/useCases/create/controller";

const registerRouter = Router();
const createUserController = new CreateUserController();

registerRouter.post("/", createUserController.execute);

export { registerRouter };
