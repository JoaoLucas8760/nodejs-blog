import { AppError } from "../../../../shared/errors/AppError";

export class GetUserProfileError extends AppError {
  constructor() {
    super("User not found", 404);
  }
}
