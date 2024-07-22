import { createActionGroup, props, emptyProps } from "@ngrx/store";
import { CategoryTree } from "../../../pages/categories/categories.model";

export const categoryTreeActions = createActionGroup({
  source: "Category Tree",
  events: {
    "Category Tree Load Initiated": emptyProps(),
    "Category Tree Loaded Success": props<{ categoryTree: CategoryTree }>(),
    "Category Tree Load Failed": props<{ error: any }>(),
    "Category Tree Not Found": emptyProps(),
  },
});
