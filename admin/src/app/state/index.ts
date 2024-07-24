import { createSelector } from "@ngrx/store";
import { CategoriesState } from "./categories/categories.selector";
import { selectFeatureCategories } from "./categories/categories.selector";

export interface AppState {
  categories: CategoriesState;
}
