import { combineReducers, createFeatureSelector } from "@ngrx/store";
import { CategoryTreeState } from "./categoryTreeState/category-tree.reducer";
import { categoryTreeReducer } from "./categoryTreeState/category-tree.reducer";
import { mobileUiStateReducer } from "./mobileUiState/mobileUiState.reducer";
import { MobileUiState } from "./mobileUiState/mobileUiState.reducer";
import { DesktopUiState } from "./desktopUiState/desktopUiState.reducer";
import { desktopUiStateReducer } from "./desktopUiState/desktopUiState.reducer";

export interface CategoriesState {
  mobileUiState: MobileUiState;
  desktopUiState: DesktopUiState;
  categoryTreeState: CategoryTreeState;
}

export const categoriesFeatureKey = "categories";

export const selectCategoriesState =
  createFeatureSelector<CategoriesState>(categoriesFeatureKey);

export const categoriesReducer = combineReducers({
  categoryTreeState: categoryTreeReducer,
  mobileUiState: mobileUiStateReducer,
  desktopUiState: desktopUiStateReducer,
});
