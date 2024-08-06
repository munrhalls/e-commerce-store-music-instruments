import { createReducer, on } from "@ngrx/store";
import { CategoryTree } from "../../../categories/categories.model";
import * as categoryTreeActions from "./category-tree.actions";
export const categoryTreeStateFeatureKey = "categoryTreeState";
import { ErrorModel } from "../../../../@core/error-handler/error.model";

export interface State {
  categoryTree: {
    data: null | CategoryTree;
    isLoading: boolean;
    error: null | ErrorModel;
  };
}

export const initialState: State = {
  categoryTree: {
    data: null,
    isLoading: false,
    error: null,
  },
};

export const categoryTreeReducer = createReducer(
  initialState,
  on(categoryTreeActions.apiLoad, (state) => ({
    ...state,
    categoryTree: {
      ...state.categoryTree,
      isLoading: true,
    },
  })),
  on(categoryTreeActions.apiLoadSuccess, (state, payload) => ({
    ...state,
    categoryTree: {
      ...state.categoryTree,
      data: payload.categoryTree,
      isLoading: false,
    },
  })),
  on(categoryTreeActions.apiLoadError, (state, payload) => ({
    ...state,
    categoryTree: {
      ...state.categoryTree,
      isLoading: false,
      error: payload.error,
    },
  })),
);
