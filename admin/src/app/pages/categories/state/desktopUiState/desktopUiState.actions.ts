import { createAction, props } from "@ngrx/store";
import { createAction, props } from "@ngrx/store";

export const selectedTreeId = createAction(
  "[desktopUi] selected id",
  props<{
    id: string;
  }>(),
);

export const allItemsUnfoldedToggle = createAction(
  "[desktopUi] all items unfolded toggle",
);

export const itemUnfolded = createAction(
  "[desktopUi] item unfolded",
  props<{
    id: string;
  }>(),
);

export const itemFolded = createAction(
  "[desktopUi] item folded",
  props<{
    id: string;
  }>(),
);

export const menuOpened = createAction(
  "[desktopUi] menu opened",
  props<{
    id: string;
  }>(),
);

export const menuClosed = createAction("[desktopUi] menu closed");

export const addFormOpened = createAction("[desktopUi] add form opened");

export const addFormClosed = createAction("[desktopUi] add form closed");

export const editFormOpened = createAction("[desktopUi] edit form opened");

export const editFormClosed = createAction("[desktopUi] edit form closed");

export const deleteFormOpened = createAction(
  "[desktopUi] delete confirmation opened",
);

export const deleteFormClosed = createAction(
  "[desktopUi] delete confirmation closed",
);
