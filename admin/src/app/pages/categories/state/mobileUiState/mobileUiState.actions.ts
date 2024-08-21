import { createAction, props } from "@ngrx/store";

export const allItemsUnfoldedToggle = createAction(
  "[mobileUi] all items unfolded toggle",
);

export const itemUnfolded = createAction(
  "[mobileUi] item unfolded",
  props<{
    id: string;
  }>(),
);

export const itemFolded = createAction(
  "[mobileUi] item folded",
  props<{
    id: string;
  }>(),
);

export const menuOpened = createAction(
  "[mobileUi] menu opened",
  props<{
    id: string;
  }>(),
);

export const menuClosed = createAction("[mobileUi] menu closed");

export const addFormOpened = createAction(
  "[mobileUi] add form opened",
  props<{
    form: "add";
  }>(),
);

export const addFormClosed = createAction("[mobileUi] add form closed");

export const editFormOpened = createAction(
  "[mobileUi] edit form opened",
  props<{
    form: "edit";
  }>(),
);

export const editFormClosed = createAction("[mobileUi] edit form closed");

export const deleteFormOpened = createAction(
  "[mobileUi] delete confirmation opened",
);

export const deleteFormClosed = createAction(
  "[mobileUi] delete confirmation closed",
);

export const deleteConfirmationIdSet = createAction(
  "[mobileUi] delete confirmation id set",
  props<{
    id: string;
  }>(),
);

export const deleteConfirmationIdSetToNull = createAction(
  "[mobileUi] delete confirmation id set to null",
);
