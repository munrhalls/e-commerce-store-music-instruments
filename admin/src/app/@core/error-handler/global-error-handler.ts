import { ErrorHandler, Injectable } from "@angular/core";
import { NbToastrService } from "@nebular/theme";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private toastrService: NbToastrService) {}

  handleError(error: any) {
    console.error(
      "Custom Error occurred, to implement abstract class later:",
      error,
    );

    this.toastrService.danger(
      "An error occurred. Please try again later.",
      "Error",
    );
  }
}
