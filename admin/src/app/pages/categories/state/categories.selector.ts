import { createSelector, createFeatureSelector } from "@ngrx/store";
import { CategoryTree } from "../../categories/categories.model";
import { CategoryTreeState } from "./categoryTreeState/category-tree.reducer";
import { mobileUiState } from "./mobileUiState/ui-state.model";
import { AppState } from "./../../../state/index";
import { ErrorModel } from "../../../@core/error-handler/error.model";

export const featureKey = "categories";

export interface CategoriesState {
  categoryTreeState: CategoryTreeState;
  mobileUiState: mobileUiState;
}

export const selectCategories = createFeatureSelector("categories");
