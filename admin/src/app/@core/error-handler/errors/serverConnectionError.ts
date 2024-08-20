import { CustomError } from "./custom-error";

export class ServerConnectionError extends CustomError {
  code = 504;
  message =
    "Error connecting to the server. Please try again in a few moments.";

  constructor() {
    super("Error connecting to the server. Please try again in a few moments.");

    Object.setPrototypeOf(this, ServerConnectionError.prototype);
  }

  serializeErrors() {
    return { code: this.code, message: this.message };
  }
}
