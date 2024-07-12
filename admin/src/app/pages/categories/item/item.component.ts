import { Component, Input } from "@angular/core";
import { CategoryNode } from "../categories.service";
@Component({
  selector: "ngx-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"],
})
export class ItemComponent {
  @Input() categoryNode: CategoryNode;
  @Input() nestingLevel: number = 0;
  // input allunfolded

  isShowMenu = false;
  isShowSubcategories = false;
  isShowAllSubcategories = false;

  toggleMenu() {
    this.isShowMenu = !this.isShowMenu;
  }
  toggleSubcategories() {
    this.isShowSubcategories = !this.isShowSubcategories;
  }
  toggleAllSubcategories() {
    this.isShowAllSubcategories = !this.isShowAllSubcategories;
  }
  // unfoldAllSubs
  // foldAllSubs
}
