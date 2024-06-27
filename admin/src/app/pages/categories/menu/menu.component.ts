import { Component, Input, TemplateRef, OnInit } from "@angular/core";
import { NbDialogService } from "@nebular/theme";

@Component({
  selector: "ngx-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent {
  @Input() category: any = { id: 0, name: "" };
  constructor(private dialogService: NbDialogService) {}

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {
      context: `${this.category.name}`,
    });
  }
}
