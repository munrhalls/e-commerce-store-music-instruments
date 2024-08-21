import { CategoriesState } from "../categories.state";
import { createSelector } from "@ngrx/store";
import { selectCategories } from "../categories.selector";

export const selectMobileUiState = createSelector(
  selectCategories,
  (state: CategoriesState) => state.mobileUiState,
);
