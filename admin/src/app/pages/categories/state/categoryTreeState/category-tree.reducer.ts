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
  on(categoryTreeActions.apiAdd, (state) => ({
    ...state,
    categoryTree: {
      ...state.categoryTree,
      isLoading: true,
    },
  })),
  on(categoryTreeActions.apiAddSuccess, (state, payload) => ({
    ...state,
    categoryTree: {
      ...state.categoryTree,
      data: payload.categoryTree,
      isLoading: false,
    },
  })),
  on(categoryTreeActions.apiAddError, (state, payload) => ({
    ...state,
    categoryTree: {
      ...state.categoryTree,
      isLoading: false,
      error: payload.error,
    },
  })),
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
  on(categoryTreeActions.apiUpdateName, (state) => ({
    ...state,
    categoryTree: {
      ...state.categoryTree,
      isLoading: true,
    },
  })),
  on(categoryTreeActions.apiUpdateNameSuccess, (state, payload) => ({
    ...state,
    categoryTree: {
      ...state.categoryTree,
      data: payload.categoryTree,
      isLoading: false,
    },
  })),
  on(categoryTreeActions.apiUpdateNameError, (state, payload) => ({
    ...state,
    categoryTree: {
      ...state.categoryTree,
      isLoading: false,
      error: payload.error,
    },
  })),
  on(categoryTreeActions.apiMoveDown, (state) => ({
    ...state,
    categoryTree: {
      ...state.categoryTree,
      isLoading: true,
    },
  })),
  on(categoryTreeActions.apiMoveDownSuccess, (state, payload) => ({
    ...state,
    categoryTree: {
      ...state.categoryTree,
      data: payload.categoryTree,
      isLoading: false,
    },
  })),
  on(categoryTreeActions.apiMoveDownError, (state, payload) => ({
    ...state,
    categoryTree: {
      ...state.categoryTree,
      isLoading: false,
      error: payload.error,
    },
  })),
  on(categoryTreeActions.apiMoveUp, (state) => ({
    ...state,
    categoryTree: {
      ...state.categoryTree,
      isLoading: true,
    },
  })),
  on(categoryTreeActions.apiMoveUpSuccess, (state, payload) => ({
    ...state,
    categoryTree: {
      ...state.categoryTree,
      data: payload.categoryTree,
      isLoading: false,
    },
  })),
  on(categoryTreeActions.apiMoveUpError, (state, payload) => ({
    ...state,
    categoryTree: {
      ...state.categoryTree,
      isLoading: false,
      error: payload.error,
    },
  })),
  on(categoryTreeActions.apiDelete, (state) => ({
    ...state,
    categoryTree: {
      ...state.categoryTree,
      isLoading: true,
    },
  })),
  on(categoryTreeActions.apiDeleteSuccess, (state, payload) => ({
    ...state,
    categoryTree: {
      ...state.categoryTree,
      data: payload.categoryTree,
      isLoading: false,
    },
  })),
  on(categoryTreeActions.apiDeleteError, (state, payload) => ({
    ...state,
    categoryTree: {
      ...state.categoryTree,
      isLoading: false,
      error: payload.error,
    },
  })),
);
