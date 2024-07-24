import { createReducer, on } from "@ngrx/store";
import { CategoryTree } from "../../../pages/categories/categories.model";
import { categoryTreeActions } from "./category-tree.actions";
export const categoryTreeStateFeatureKey = "categoryTreeState";

export interface State {
  categoryTree: CategoryTree | null;
}

export const initialState: State = {
  categoryTree: null,
};

export const categoryTreeReducer = createReducer(
  initialState,
  on(categoryTreeActions.loadingFromLs, (state) => ({
    ...state,
    categoryTree: null,
  })),
  on(categoryTreeActions.loadingFromLsSuccess, (state, { categoryTree }) => ({
    ...state,
    categoryTree,
  })),
  // on(categoryTreeActions.loadingFromLSFailure, (state) => ({
  //   ...state,
  //   categoryTree: null,
  // })),
);
