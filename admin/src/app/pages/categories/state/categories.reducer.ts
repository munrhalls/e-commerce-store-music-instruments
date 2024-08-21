import { combineReducers, createFeatureSelector } from "@ngrx/store";
import { mobileUiStateReducer } from "./mobileUiState/mobileUiState.reducer";
import { categoryTreeReducer } from "./categoryTreeState/category-tree.reducer";
import { CategoryTree } from "../categories.model";
import { MobileUiState } from "./mobileUiState/mobileUiState.reducer";
import { CategoryTreeState } from "./categoryTreeState/category-tree.reducer";

export interface CategoriesState {
  mobileUiState: MobileUiState;
  categoryTreeState: CategoryTreeState;
}

export const categoriesFeatureKey = "categories";

export const selectCategoriesState =
  createFeatureSelector<CategoriesState>(categoriesFeatureKey);

export const categoriesReducer = combineReducers({
  mobileUiState: mobileUiStateReducer,
  categoryTreeState: categoryTreeReducer,
});
