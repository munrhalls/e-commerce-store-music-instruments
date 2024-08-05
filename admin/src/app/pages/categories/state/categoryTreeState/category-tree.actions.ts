import { createAction, props } from "@ngrx/store";
import { CategoryTree } from "../../categories.model";
import { ErrorModel } from "../../../../@core/error-handler/error.model";

export const pageOpened = createAction(
  "[Category Tree] Page Opened",
  props<{ timeStamp: Date }>(),
);
export const apiLoad = createAction("[Category Tree] API Load");

export const apiLoadSuccess = createAction(
  "[Category Tree] API Load Success",
  props<{ categoryTree: CategoryTree }>(),
);

export const apiLoadError = createAction(
  "[Category Tree] API Load Error",
  props<{ error: ErrorModel }>(),
);
