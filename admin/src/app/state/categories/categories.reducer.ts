import { combineReducers, createFeatureSelector } from "@ngrx/store";
import { uiStateReducer } from "./uiState/ui-state.reducer";
import { categoryTreeStateReducer } from "./categoryTreeState/category-tree.reducer";

export const categoriesFeatureKey = "categories";

export interface CategoriesState {
  uiState: uiState;
  categoryTreeState: categoryTreeState;
}

export const selectCategoriesState =
  createFeatureSelector<CategoriesState>(categoriesFeatureKey);

export const categoriesReducer = combineReducers<CategoriesState>({
  uiState: uiStateReducer,
  categoryTreeState: categoryTreeStateReducer,
});
