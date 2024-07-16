import { createAction, props } from "@ngrx/store";
import { CategoryNode } from "../../pages/categories/categories.service";

export const setMenuOpenId = createAction(
  "[Categories Menu] Set Open ID",
  props<{ menuId: string | null }>(),
);

export const loadCategoryNode = createAction(
  "[loadCategoryNode] Load Categories",
);

export const loadCategoryNodeSuccess = createAction(
  "[loadCategoryNodeSuccess] Load Categories Success",
  props<{ categoryNode: CategoryNode }>(),
);
export const loadCategoryNodeError = createAction(
  "[loadCategoryNodeError] Load Categories Failure",
  props<{ error: any }>(),
);
