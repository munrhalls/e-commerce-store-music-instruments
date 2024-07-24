import { combineReducers, createFeatureSelector } from "@ngrx/store";
import { uiStateReducer } from "./uiState/ui-state.reducer";
import { categoryTreeReducer } from "./categoryTreeState/category-tree.reducer";
import { CategoryTree } from "../../pages/categories/categories.model";
import { UiState } from "./uiState/ui-state.model";
export const categoriesFeatureKey = "categories";

export interface CategoriesState {
  uiState: UiState;
  categoryTree: CategoryTree | null;
}

export const selectCategoriesState =
  createFeatureSelector<CategoriesState>(categoriesFeatureKey);

export const categoriesReducer = combineReducers({
  uiState: uiStateReducer,
  categoryTree: categoryTreeReducer,
});
