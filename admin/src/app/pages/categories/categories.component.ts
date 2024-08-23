import { Component, OnInit, OnDestroy } from "@angular/core";
import { CategoriesService } from "./categories.service";
import { Subscription } from "rxjs";
import { CategoryTree } from "./categories.model";
import { Store } from "@ngrx/store";
import { selectCategoryTreeState } from "./state/categoryTreeState/category-tree.selectors";
import { selectCommonUiState } from "./state/commonUiState/commonUiState.selectors";
import * as categoryTreeActions from "./state/categoryTreeState/category-tree.actions";
import { CommonUiState } from "./state/commonUiState/commonUiState.reducer";

@Component({
  selector: "ngx-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"],
})
export class CategoriesComponent implements OnInit, OnDestroy {
  categoryTreeState$ = this.store.select(selectCategoryTreeState);
  commonUiState$ = this.store.select(selectCommonUiState);
  commonUiState: CommonUiState;

  constructor(private store: Store) {} // Removed categoriesService

  ngOnInit() {
    this.store.dispatch(categoryTreeActions.apiLoad());

    this.categoryTreeState$.subscribe((categoryTreeState) => {});

    this.commonUiState$.subscribe((commonUiState) => {
      this.commonUiState = commonUiState;
    });
  }

  ngOnDestroy() {}
}
