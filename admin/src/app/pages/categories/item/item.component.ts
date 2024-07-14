import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { CategoryNode } from "../categories.service";
import { CategoriesService } from "../categories.service";
import { Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";
import * as fromCategories from "../../../@store/categories";

@Component({
  selector: "ngx-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"],
})
export class ItemComponent {
  constructor(
    private store: Store<{ categories: fromCategories.CategoriesState }>,
    private categoriesService: CategoriesService,
  ) {}
  @Input() categoryNode: CategoryNode;
  @Input() nestingLevel: number = 0;
  menuOpenId$: Observable<string | null> = this.store.select(
    fromCategories.selectMenuOpenId,
  );

  isShowSubcategories = false;
  isConfirmDelete = false;
  isMenuOpen = false;
  menuOpenedId: string = "";
  subscription: Subscription | null = null;

  get isShowMenu() {
    return this.menuOpenedId === this.categoryNode.id;
  }
  toggleMenu() {
    this.menuOpenId$.pipe(take(1)).subscribe((menuOpenId) => {
      this.store.dispatch(
        fromCategories.setMenuOpenId({
          menuId:
            menuOpenId === this.categoryNode.id ? null : this.categoryNode.id,
        }),
      );
    });
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
