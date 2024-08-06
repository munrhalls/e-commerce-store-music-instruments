import { createSelector, createFeatureSelector } from "@ngrx/store";
import { CategoryTree } from "../../categories/categories.model";
import { UiState } from "./uiState/ui-state.model";
import { AppState } from "./../../../state/index";
import { ErrorModel } from "../../../@core/error-handler/error.model";

export const featureKey = "categories";

export interface CategoriesState {
  categoryTree: {
    data: CategoryTree | null;
    isLoading: boolean;
    error: null | ErrorModel;
  };
  uiState: UiState;
}

export const selectCategories = createFeatureSelector("categories");
