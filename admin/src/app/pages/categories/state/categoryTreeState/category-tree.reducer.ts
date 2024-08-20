import { createReducer, on } from "@ngrx/store";
import { CategoryTree } from "../../../categories/categories.model";
import * as categoryTreeActions from "./category-tree.actions";
export const categoryTreeStateFeatureKey = "categoryTreeState";

export interface CategoryTreeState {
  data: null | CategoryTree;
  isLoading: boolean;
  error: null | string;
}

export let initialState: CategoryTreeState = {
  data: null,
  isLoading: false,
  error: null,
};

export const categoryTreeReducer = createReducer(
  (initialState = initialState),
  on(categoryTreeActions.apiAdd, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(categoryTreeActions.apiAddSuccess, (state, payload) => ({
    ...state,
    data: payload.categoryTree,
    isLoading: false,
  })),
  on(categoryTreeActions.apiAddError, (state, payload) => ({
    ...state,
    isLoading: false,
    error: payload.error,
  })),
  on(categoryTreeActions.apiLoad, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(categoryTreeActions.apiLoadSuccess, (state, payload) => ({
    ...state,
    data: payload.categoryTree,
    isLoading: false,
  })),
  on(categoryTreeActions.apiLoadError, (state, payload) => ({
    ...state,
    isLoading: false,
    error: payload.error,
  })),
  on(categoryTreeActions.apiUpdateName, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(categoryTreeActions.apiUpdateNameSuccess, (state, payload) => ({
    ...state,
    data: payload.categoryTree,
    isLoading: false,
  })),
  on(categoryTreeActions.apiUpdateNameError, (state, payload) => ({
    ...state,
    isLoading: false,
    error: payload.error,
  })),
  on(categoryTreeActions.apiMoveDown, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(categoryTreeActions.apiMoveDownSuccess, (state, payload) => ({
    ...state,
    data: payload.categoryTree,
    isLoading: false,
  })),
  on(categoryTreeActions.apiMoveDownError, (state, payload) => ({
    ...state,
    isLoading: false,
    error: payload.error,
  })),
  on(categoryTreeActions.apiMoveUp, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(categoryTreeActions.apiMoveUpSuccess, (state, payload) => ({
    ...state,
    data: payload.categoryTree,
    isLoading: false,
  })),
  on(categoryTreeActions.apiMoveUpError, (state, payload) => ({
    ...state,
    isLoading: false,
    error: payload.error,
  })),
  on(categoryTreeActions.apiDelete, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(categoryTreeActions.apiDeleteSuccess, (state, payload) => ({
    ...state,
    data: payload.categoryTree,
    isLoading: false,
  })),
  on(categoryTreeActions.apiDeleteError, (state, payload) => ({
    ...state,
    isLoading: false,
    error: payload.error,
  })),
);
