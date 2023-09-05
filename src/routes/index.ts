import { Router } from "express";

import { loginRouter } from "./login.routes";
import { registerRouter } from "./register.routes";
import { userProfileRouter } from "./userProfile.routes";
import { postRouter } from "./posts.routes";

const router = Router();

router.use("/login", loginRouter);
router.use("/register", registerRouter);
router.use("/profile", userProfileRouter);
router.use("/posts", postRouter);

export { router };
