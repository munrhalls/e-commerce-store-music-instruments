import { createActionGroup, props, emptyProps } from "@ngrx/store";
import { CategoryTree } from "../../../pages/categories/categories.model";

export const categoryTreeActions = createActionGroup({
  source: "Category Tree",
  events: {
    "Loading From LS": emptyProps(),
    "Loading From LS Success": props<{
      categoryTree: CategoryTree;
    }>(),
    "Loading From LS Failure": emptyProps(),
  },
});
