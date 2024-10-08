import { createSelector } from "@ngrx/store";
import { selectCategories } from "./../categories.selector";
import { CategoryTree } from "./../../categories.model";
import { CategoriesState } from "./../categories.selector";

export const selectCategoryTreeState = createSelector(
  selectCategories,
  (state: CategoriesState) => state.categoryTreeState,
);
