import { combineReducers, createFeatureSelector } from "@ngrx/store";
import {
  CategoryTreeState,
  categoryTreeReducer,
} from "./categoryTreeState/category-tree.reducer";
import {
  CommonUiState,
  commonUiStateReducer,
} from "./commonUiState/commonUiState.reducer";

import {
  MobileUiState,
  mobileUiStateReducer,
} from "./mobileUiState/mobileUiState.reducer";
import {
  DesktopUiState,
  desktopUiStateReducer,
} from "./desktopUiState/desktopUiState.reducer";

export interface CategoriesState {
  commonUiState: CommonUiState;
  mobileUiState: MobileUiState;
  desktopUiState: DesktopUiState;
  categoryTreeState: CategoryTreeState;
}

export interface TestCategoriesState {
  commonUiState: CommonUiState;
  mobileUiState: MobileUiState | null;
  desktopUiState: DesktopUiState | null;
  categoryTreeState: CategoryTreeState;
}

export const categoriesFeatureKey = "categories";

export const selectCategoriesState =
  createFeatureSelector<TestCategoriesState>(categoriesFeatureKey);

export const categoriesReducer = combineReducers({
  categoryTreeState: categoryTreeReducer,
  mobileUiState: mobileUiStateReducer,
  desktopUiState: desktopUiStateReducer,
  commonUiState: commonUiStateReducer,
});
