import { AppError } from "../../../../shared/errors/AppError";

export class GetPostError extends AppError {
  constructor() {
    super("Post not found", 404);
  }
}
