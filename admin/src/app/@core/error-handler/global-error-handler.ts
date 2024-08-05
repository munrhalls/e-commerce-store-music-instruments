import { ErrorHandler, Injectable } from "@angular/core";
import { NbToastrService } from "@nebular/theme";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private toastrService: NbToastrService) {}
}
