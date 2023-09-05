import { Router } from "express";

import { GetUserProfileController } from "../modules/users/useCases/getProfile/controller";
import { ensureAuthenticated } from "../shared/infra/http/middlwares/ensureAuthenticated";

const userProfileRouter = Router();
const getUserProfileController = new GetUserProfileController();

userProfileRouter.use(ensureAuthenticated);

userProfileRouter.get("/", getUserProfileController.execute);

export { userProfileRouter };
