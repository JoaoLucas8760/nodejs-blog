import { Router } from "express";

import { ensureAuthenticated } from "../shared/infra/http/middlwares/ensureAuthenticated";
import { CreatePostController } from "../modules/posts/useCases/create/controller";
import { UpdatePostController } from "../modules/posts/useCases/update/controller";
import { DeletePostController } from "../modules/posts/useCases/delete/controller";
import { GetPostController } from "../modules/posts/useCases/get/controller";
import { ListPostController } from "../modules/posts/useCases/list/controller";

const postRouter = Router();

const createPostController = new CreatePostController();
const updatePostController = new UpdatePostController();
const deletePostController = new DeletePostController();
const getPostController = new GetPostController();
const listPostController = new ListPostController();

postRouter.use(ensureAuthenticated);

postRouter.post("/", createPostController.execute);
postRouter.put("/:post_id", updatePostController.execute);
postRouter.delete("/:post_id", deletePostController.execute);
postRouter.get("/:post_id", getPostController.execute);
postRouter.get("/", listPostController.execute);

export { postRouter };
