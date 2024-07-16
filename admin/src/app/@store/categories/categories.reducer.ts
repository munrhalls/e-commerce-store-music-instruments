import { createReducer, on } from "@ngrx/store";
import * as CategoriesActions from "./categories.actions";
import { CategoryNode } from "../../pages/categories/categories.service";

export interface CategoriesState {
  menuOpenId: string | null;
  categoryNode: CategoryNode | null;
}

export const initialState: CategoriesState = {
  menuOpenId: null,
  categoryNode: null,
};

export const categoriesReducer = createReducer(
  initialState,
  on(CategoriesActions.loadCategoryNodeSuccess, (state, { categoryNode }) => ({
    ...state,
    categoryNode: categoryNode,
  })),
  on(CategoriesActions.loadCategoryNodeError, (state, { error }) => ({
    ...state,
    error,
  })),
  on(CategoriesActions.setMenuOpenId, (state, { menuId }) => ({
    ...state,
    menuOpenId: menuId,
  })),
);
