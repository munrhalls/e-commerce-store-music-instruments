import { Component, Input } from "@angular/core";

@Component({
  selector: "ngx-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"],
})
export class ItemComponent {
  @Input() category: any = { id: 0, name: "" };
  isShowMenu = false;

  toggleMenu() {
    this.isShowMenu = !this.isShowMenu;
  }
}
