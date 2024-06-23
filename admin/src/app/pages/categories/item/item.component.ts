import {
  Component,
  TemplateRef,
  ViewChild,
  Input,
  HostBinding,
} from "@angular/core";
import { NbDialogService, NbDialogRef } from "@nebular/theme";

@Component({
  selector: "ngx-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"],
})
export class ItemComponent {
  @ViewChild("dialogTemplate") dialogTemplate: TemplateRef<any>;
  @Input() category: any = { id: 0, name: "" };
  @HostBinding("class.highlight")
  get isisShowMenuClassApplied() {
    return this.isShowMenu;
  }
  isShowMenu = false;
  dialogRef: NbDialogRef<any>;

  constructor(private dialogService: NbDialogService) {}

  openDialog() {
    this.dialogRef = this.dialogService.open(this.dialogTemplate);
  }
  closeDialog() {
    this.dialogRef.close();
  }

  toggleMenu() {
    this.isShowMenu = !this.isShowMenu;
  }
}
