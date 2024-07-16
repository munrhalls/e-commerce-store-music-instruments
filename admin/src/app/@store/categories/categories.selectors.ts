import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromCategories from "./categories.reducer";

export const selectCategoriesState =
  createFeatureSelector<fromCategories.CategoriesState>("categories");

export const selectMenuOpenId = createSelector(
  selectCategoriesState,
  (state: fromCategories.CategoriesState) => state.menuOpenId,
);

export const selectCategories = createSelector(
  selectCategoriesState,
  (state) => state.categories,
);
