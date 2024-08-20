import { combineReducers, createFeatureSelector } from "@ngrx/store";
import { uiStateReducer } from "./uiState/ui-state.reducer";
import { categoryTreeReducer } from "./categoryTreeState/category-tree.reducer";
import { CategoryTree } from "../categories.model";
import { UiState } from "./uiState/ui-state.model";
import { CategoryTreeState } from "./categoryTreeState/category-tree.reducer";

export interface CategoriesState {
  uiState: UiState;
  categoryTreeState: CategoryTreeState;
}

export const categoriesFeatureKey = "categories";

export const selectCategoriesState =
  createFeatureSelector<CategoriesState>(categoriesFeatureKey);

export const categoriesReducer = combineReducers({
  uiState: uiStateReducer,
  categoryTreeState: categoryTreeReducer,
});
