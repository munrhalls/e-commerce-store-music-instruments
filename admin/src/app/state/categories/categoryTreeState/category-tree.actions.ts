import { createActionGroup, props, emptyProps } from "@ngrx/store";
import { CategoryTree } from "../../../pages/categories/categories.model";

export const categoryTreeActions = createActionGroup({
  source: "Category Tree",
  events: {
    loadCategoryTreeFromLocalStorage: emptyProps(),
    loadCategoryTreeFromLocalStorageSuccess: props<{
      categoryTree: CategoryTree;
    }>(),
    loadCategoryTreeFromLocalStorageFailure: props<{ error: any }>(),
  },
});
