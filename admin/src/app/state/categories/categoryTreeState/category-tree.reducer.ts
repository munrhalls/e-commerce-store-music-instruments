import { createReducer } from "@ngrx/store";
import { CategoryTree } from "../../../pages/categories/categories.model";

export const categoryTreeStateFeatureKey = "categoryTreeState";

export interface State {
  categoryTree: CategoryTree | null;
}

export const initialState: State = {
  categoryTree: null,
};

export const categoryTreeReducer = createReducer(initialState);
