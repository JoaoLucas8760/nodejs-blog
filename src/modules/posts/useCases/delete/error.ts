import { AppError } from "../../../../shared/errors/AppError";

export class DeletePostError extends AppError {
  constructor() {
    super("Post not deleted", 400);
  }
}
