import { createActionGroup, props, emptyProps } from "@ngrx/store";
import { CategoryTree } from "../../../pages/categories/categories.model";

export const categoryTreeActions = createActionGroup({
  source: "Category Tree",
  events: {
    "Loading From Local Storage": emptyProps(),
    "Loading From Local Storage Success": props<{
      categoryTree: CategoryTree;
    }>(),
    "Loading From Local Storage Failure": emptyProps(),
  },
});
