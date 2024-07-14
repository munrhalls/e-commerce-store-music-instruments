// src/app/@store/categories/categories.reducer.ts
import { createFeature, createReducer, on } from "@ngrx/store";
import * as CategoriesActions from "./categories.actions";

export interface CategoriesState {
  menuOpenId: string | null;
}

export const initialState: CategoriesState = {
  menuOpenId: null,
};

export const categoriesReducer = createReducer(
  initialState,
  on(CategoriesActions.setMenuOpenId, (state, { menuId }) => ({
    ...state,
    menuOpenId: menuId,
  })),
);

export const categoriesFeature = createFeature({
  name: "categories",
  reducer: categoriesReducer,
});
