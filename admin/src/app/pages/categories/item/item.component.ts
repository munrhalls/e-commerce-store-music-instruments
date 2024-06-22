import { Component, Input, HostBinding } from "@angular/core";

@Component({
  selector: "ngx-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"],
})
export class ItemComponent {
  @Input() category: any = { id: 0, name: "" };
  isShowMenu = false;

  @HostBinding('class.highlight')
  get isisShowMenuClassApplied() {
    return this.isShowMenu;
  }

  toggleMenu() {
    this.isShowMenu = !this.isShowMenu;
  }
}
