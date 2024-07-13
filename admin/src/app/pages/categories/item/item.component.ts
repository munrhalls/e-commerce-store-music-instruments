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

  isShowMenu = false;
  isShowSubcategories = false;
  isConfirmDelete = false;

  toggleMenu() {
    this.isShowMenu = !this.isShowMenu;
  }
  toggleSubcategories() {
    this.isShowSubcategories = !this.isShowSubcategories;
  }
  handleCategoryAdded() {
    this.isShowSubcategories = true;
  }
  toggleIsConfirmDelete() {
    this.isConfirmDelete = !this.isConfirmDelete;
  }
  getPaddingLeft() {
    return (this.nestingLevel + 1) * 0.75;
  }
  getMenuIcon() {
    return this.isShowMenu ? "close" : "menu";
  }
  getSubcategoriesIcon() {
    return this.isShowSubcategories ? "chevron-up" : "chevron-down-outline";
  }
}
