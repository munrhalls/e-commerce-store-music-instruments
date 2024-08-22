import { createReducer, on } from "@ngrx/store";
import * as commonUiActions from "./commonUiState.actions";

export const uiStateFeatureKey = "commonUiState";

export interface CommonUiState {
  deviceSize: "mobile" | "desktop";
  displayMode: "mobile" | "desktop";
}
export const initialState = {
  deviceSize: "mobile",
  displayMode: "mobile",
};

export const commonUiStateReducer = createReducer(
  initialState,
  on(commonUiActions.deviceSizeSetToMobile, (state) => ({
    ...state,
    deviceSize: "mobile",
  })),
  on(commonUiActions.deviceSizeSetToDesktop, (state) => ({
    ...state,
    deviceSize: "desktop",
  })),
  on(commonUiActions.displayModeSetToMobile, (state) => ({
    ...state,
    displayMode: "mobile",
  })),
  on(commonUiActions.displayModeSetToDesktop, (state) => ({
    ...state,
    displayMode: "desktop",
  })),
);
