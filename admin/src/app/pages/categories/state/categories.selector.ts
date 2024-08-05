import { createSelector, createFeatureSelector } from "@ngrx/store";
import { CategoryTree } from "../../pages/categories/categories.model";
import { UiState } from "./uiState/ui-state.model";
import { AppState } from "./../index";
export const featureKey = "categories";

export interface CategoriesState {
  categoryTree: CategoryTree;
  uiState: UiState;
}

export const selectCategories = (state: AppState) => state.categories;

export const selectCategoryTree = createSelector(
  selectCategories,
  (state: CategoriesState) => state.categoryTree,
);
