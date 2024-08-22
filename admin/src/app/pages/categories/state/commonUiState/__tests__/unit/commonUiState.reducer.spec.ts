import * as commonUiStateActions from "../../commonUiState.actions";
import {
  initialState,
  commonUiStateReducer,
} from "../../commonUiState.reducer";

describe("INPUT ACTIONS -> OUTPUT SELECTOR STATE PROPER", () => {
  it("action: deviceSizeSetToMobile -> deviceSize: mobile", () => {
    const action = commonUiStateActions.deviceSizeSetToMobile();
    const result = commonUiStateReducer(initialState, action);
    expect(result.deviceSize).toEqual("mobile");
  });

  it("action: deviceSizeSetToDesktop -> deviceSize: desktop", () => {
    const action = commonUiStateActions.deviceSizeSetToDesktop();
    const result = commonUiStateReducer(initialState, action);
    expect(result.deviceSize).toEqual("desktop");
  });

  it("action: displayModeSetToMobile -> displayMode: mobile", () => {
    const action = commonUiStateActions.displayModeSetToMobile();
    const result = commonUiStateReducer(initialState, action);
    expect(result.displayMode).toEqual("mobile");
  });

  it("action: displayModeSetToDesktop -> displayMode: desktop", () => {
    const action = commonUiStateActions.displayModeSetToDesktop();
    const result = commonUiStateReducer(initialState, action);
    expect(result.displayMode).toEqual("desktop");
  });

  it("action: deviceSizeSetToMobile -> displayMode: mobile", () => {
    const action = commonUiStateActions.deviceSizeSetToMobile();
    const result = commonUiStateReducer(initialState, action);
    expect(result.displayMode).toEqual("mobile");
  });
});
