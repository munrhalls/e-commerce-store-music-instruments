import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { CategoryNode } from "../categories.service";
import { CategoriesService } from "../categories.service";
import { Subscription } from "rxjs";

@Component({
  selector: "ngx-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"],
})
export class ItemComponent implements OnInit, OnDestroy {
  constructor(private categoriesService: CategoriesService) {}
  @Input() categoryNode: CategoryNode;
  @Input() nestingLevel: number = 0;

  isShowSubcategories = false;
  isConfirmDelete = false;
  isMenuOpen = false;
  menuOpenedId: string = "";
  subscription: Subscription | null = null;

  ngOnInit(): void {
    this.subscription = this.categoriesService.menuOpenedId$.subscribe((id) => {
      this.menuOpenedId = id;
    });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  get isShowMenu() {
    return this.menuOpenedId === this.categoryNode.id;
  }
  toggleMenu() {
    this.isShowMenu ? this.closeMenu() : this.openMenu();
  }
  openMenu() {
    this.categoriesService.setMenuOpenedId(this.categoryNode.id);
  }
  closeMenu() {
    this.categoriesService.setMenuOpenedId(null);
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
