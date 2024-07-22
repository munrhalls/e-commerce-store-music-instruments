import { Component, Input } from "@angular/core";
import { NbToastrService } from "@nebular/theme"; // Import ngx-admin's toastr service for notifications

@Component({
  selector: "ngx-error",
  templateUrl: "./error.component.html",
  styleUrls: ["./error.component.scss"],
})
export class ErrorComponent {
  @Input() error: ErrorModel;

  constructor(private toastrService: NbToastrService) {}

  dismissError() {}

  showErrorToast() {
    this.toastrService.danger(this.error.message, this.error.code);
  }
}
