import { createSelector, createFeatureSelector } from "@ngrx/store";
import { CategoryTree } from "../../categories/categories.model";
import { CategoryTreeState } from "./categoryTreeState/category-tree.reducer";
import { MobileUiState } from "./mobileUiState/mobileUiState.reducer";
import { DesktopUiState } from "./desktopUiState/desktopUiState.reducer";
import { AppState } from "./../../../state/index";
import { ErrorModel } from "../../../@core/error-handler/error.model";

export const featureKey = "categories";

export interface CategoriesState {
  categoryTreeState: CategoryTreeState;
  mobileUiState: MobileUiState;
  desktopUiState: DesktopUiState;
}

export const selectCategories = createFeatureSelector("categories");
