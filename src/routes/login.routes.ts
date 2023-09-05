import { Router } from "express";

import { AuthenticateUserController } from "../modules/users/useCases/authenticate/controller";

const loginRouter = Router();
const authenticateUserController = new AuthenticateUserController();

loginRouter.post("/", authenticateUserController.execute);

export { loginRouter };
