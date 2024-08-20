import { createAction, props } from "@ngrx/store";
import { CategoryTree } from "../../categories.model";
import { ErrorModel } from "../../../../@core/error-handler/error.model";

// CREATE
export const apiAdd = createAction(
  "[Category Tree] API Add Category To Target",
  props<{
    targetPathIds: string[];
    newCategory: CategoryTree;
  }>(),
);

export const apiAddSuccess = createAction(
  "[Category Tree] API Add Category To Target Success",
  props<{ categoryTree: CategoryTree }>(),
);

export const apiAddError = createAction(
  "[Category Tree] API Add Category To Target Error",
  props<{ error: string }>(),
);

// READ
export const apiLoad = createAction("[Category Tree] API Load");

export const apiLoadSuccess = createAction(
  "[Category Tree] API Load Success",
  props<{ categoryTree: CategoryTree }>(),
);

export const apiLoadError = createAction(
  "[Category Tree] API Load Error",
  props<{ error: string }>(),
);

// UPDATE NAME

export const apiUpdateName = createAction(
  "[Category Tree] API Update Name",
  props<{
    targetPathIds: string[];
    name: string;
  }>(),
);

export const apiUpdateNameSuccess = createAction(
  "[Category Tree] API Update Name Success",
  props<{ categoryTree: CategoryTree }>(),
);

export const apiUpdateNameError = createAction(
  "[Category Tree] API Update Name Error",
  props<{ error: string }>(),
);

// UPDATE MOVE DOWN

export const apiMoveDown = createAction(
  "[Category Tree] API Update Move Down",
  props<{ targetPathIds: string[] }>(),
);

export const apiMoveDownSuccess = createAction(
  "[Category Tree] API Update Move Down Success",
  props<{ categoryTree: CategoryTree }>(),
);

export const apiMoveDownError = createAction(
  "[Category Tree] API Update Move Down Error",
  props<{ error: string }>(),
);

// UPDATE MOVE UP

export const apiMoveUp = createAction(
  "[Category Tree] API Update Move Up",
  props<{ targetPathIds: string[] }>(),
);

export const apiMoveUpSuccess = createAction(
  "[Category Tree] API Update Move Up Success",
  props<{ categoryTree: CategoryTree }>(),
);

export const apiMoveUpError = createAction(
  "[Category Tree] API Update Move Up Error",
  props<{ error: string }>(),
);

// DELETE
export const apiDelete = createAction(
  "[Category Tree] API Update Delete",
  props<{ targetPathIds: string[] }>(),
);

export const apiDeleteSuccess = createAction(
  "[Category Tree] API Update Delete Success",
  props<{ categoryTree: CategoryTree }>(),
);

export const apiDeleteError = createAction(
  "[Category Tree] API Update Delete Error",
  props<{ error: string }>(),
);
