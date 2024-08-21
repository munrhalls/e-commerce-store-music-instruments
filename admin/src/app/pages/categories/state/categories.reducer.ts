import { combineReducers, createFeatureSelector } from "@ngrx/store";
import { mobileUiStateReducer } from "./mobileUiState/ui-state.reducer";
import { categoryTreeReducer } from "./categoryTreeState/category-tree.reducer";
import { CategoryTree } from "../categories.model";
import { mobileUiState } from "./mobileUiState/ui-state.model";
import { CategoryTreeState } from "./categoryTreeState/category-tree.reducer";

export interface CategoriesState {
  mobileUiState: mobileUiState;
  categoryTreeState: CategoryTreeState;
}

export const categoriesFeatureKey = "categories";

export const selectCategoriesState =
  createFeatureSelector<CategoriesState>(categoriesFeatureKey);

export const categoriesReducer = combineReducers({
  mobileUiState: mobileUiStateReducer,
  categoryTreeState: categoryTreeReducer,
});
