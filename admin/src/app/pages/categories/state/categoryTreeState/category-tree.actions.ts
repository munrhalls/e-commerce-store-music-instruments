import { createAction, props } from "@ngrx/store";
import { CategoryTree } from "../../categories.model";
import { ErrorModel } from "../../../../@core/error-handler/error.model";

export const apiLoad = createAction("[Category Tree] API Load");

export const apiLoadSuccess = createAction(
  "[Category Tree] API Load Success",
  props<{ categoryTree: CategoryTree }>(),
);

export const apiLoadError = createAction(
  "[Category Tree] API Load Error",
  props<{ error: ErrorModel }>(),
);

// createCategory

export const apiCreateNewCategory = createAction(
  "[Category Tree] API Create New Category",
  props<{
    addingNewCategory: {
      targetId: string;
      newCategory: CategoryTree;
    };
  }>(),
);

export const apiCreateNewCategorySuccess = createAction(
  "[Category Tree] API Create New Success Category",
  props<{ categoryTree: CategoryTree }>(),
);

export const apiCreateNewCategoryError = createAction(
  "[Category Tree] API Create New Category Error",
  props<{ error: ErrorModel }>(),
);

// updateCategoryName

export const apiUpdateCategoryName = createAction(
  "[Category Tree] API Update Name",
  props<{ updatedCategory: CategoryTree }>(),
);

export const apiUpdateCategoryNameSuccess = createAction(
  "[Category Tree] API Update Name Success",
  props<{ categoryTree: CategoryTree }>(),
);

export const apiUpdateCategoryNameError = createAction(
  "[Category Tree] API Update Name Error",
  props<{ error: ErrorModel }>(),
);

// updateCategoryMoveDown

export const apiMoveDown = createAction(
  "[Category Tree] API Update Move Down",
  props<{ moveDownTargetCategory: CategoryTree }>(),
);

export const apiMoveDownSuccess = createAction(
  "[Category Tree] API Update Move Down Success",
  props<{ categoryTree: CategoryTree }>(),
);

export const apiMoveDownError = createAction(
  "[Category Tree] API Update Move Down Error",
  props<{ error: ErrorModel }>(),
);

// updateCategoryMoveUp

export const apiMoveUp = createAction(
  "[Category Tree] API Update Move Up",
  props<{ moveUpTargetCategory: CategoryTree }>(),
);

export const apiMoveUpSuccess = createAction(
  "[Category Tree] API Update Move Up Success",
  props<{ categoryTree: CategoryTree }>(),
);

export const apiMoveUpError = createAction(
  "[Category Tree] API Update Move Up Error",
  props<{ error: ErrorModel }>(),
);

// updateCategoryDelete

export const apiDeleteCategory = createAction(
  "[Category Tree] API Update Delete",
  props<{ toDeleteTargetCategory: CategoryTree }>(),
);

export const apiDeleteCategorySuccess = createAction(
  "[Category Tree] API Update Delete Success",
  props<{ categoryTree: CategoryTree }>(),
);

export const apiDeleteCategoryError = createAction(
  "[Category Tree] API Update Delete Error",
  props<{ error: ErrorModel }>(),
);
