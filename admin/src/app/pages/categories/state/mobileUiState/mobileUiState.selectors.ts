import { CategoriesState } from "../categories.reducer";
import { createSelector } from "@ngrx/store";
import { selectCategories } from "../categories.selector";

export const selectMobileUiState = createSelector(
  selectCategories,
  (state: CategoriesState) => state.mobileUiState,
);
