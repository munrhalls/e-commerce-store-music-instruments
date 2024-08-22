import { createAction, props } from "@ngrx/store";

export const deviceSizeSetToMobile = createAction(
  "[commonUi] device size set to mobile",
);

export const deviceSizeSetToDesktop = createAction(
  "[commonUi] device size set to desktop",
);

export const displayModeSetToMobile = createAction(
  "[commonUi] display mode set to mobile",
);

export const displayModeSetToDesktop = createAction(
  "[commonUi] display mode set to desktop",
);
