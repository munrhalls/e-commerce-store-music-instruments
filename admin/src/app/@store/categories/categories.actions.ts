import { createAction, props } from "@ngrx/store";

export const setMenuOpenId = createAction(
  "[Categories Menu] Set Open ID",
  props<{ menuId: string | null }>(),
);
