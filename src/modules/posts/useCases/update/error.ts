import { AppError } from "../../../../shared/errors/AppError";

export class UpdatePostError extends AppError {
  constructor() {
    super("Post not found", 404);
  }
}
