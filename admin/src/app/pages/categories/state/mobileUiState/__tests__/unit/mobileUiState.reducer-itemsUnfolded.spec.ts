import {
  mobileUiStateReducer,
  MobileUiState,
} from "../../mobileUiState.reducer";
import * as mobileUiActions from "../../mobileUiState.actions";

let initialState: MobileUiState;

describe("ITEMS UNFOLDED INPUT ACTIONS -> OUTPUT STATE IS PROPER", () => {
  initialState = {
    itemsUnfolded: {
      all: false,
      list: [],
    },
    menuOpened: {
      id: null,
      form: null,
      deleteConfirmationId: null,
    },
  };

  it("allItemsUnfoldedToggle -> all: false -> all: true", () => {
    const action = mobileUiActions.allItemsUnfoldedToggle();
    const state = mobileUiStateReducer(initialState, action);

    expect(state.itemsUnfolded.all).toBe(true);
  });
  it("allItemsUnfoldedToggle -> all: true -> all: false", () => {
    const action = mobileUiActions.allItemsUnfoldedToggle();
    const state = mobileUiStateReducer(
      { ...initialState, itemsUnfolded: { all: true, list: [] } },
      action,
    );

    expect(state.itemsUnfolded.all).toBe(false);
  });
  it("itemUnfolded -> list: [] -> list: [id]", () => {
    const action = mobileUiActions.itemUnfolded({ id: "1" });
    const state = mobileUiStateReducer(initialState, action);

    expect(state.itemsUnfolded.list).toEqual(["1"]);
  });
  it("itemUnfolded -> list: [id] -> list: [id, id2]", () => {
    const action = mobileUiActions.itemUnfolded({ id: "2" });
    const state = mobileUiStateReducer(
      { ...initialState, itemsUnfolded: { all: false, list: ["1"] } },
      action,
    );

    expect(state.itemsUnfolded.list).toEqual(["1", "2"]);
  });
  it("itemFolded -> list: [id] -> list: []", () => {
    const action = mobileUiActions.itemFolded({ id: "1" });
    const state = mobileUiStateReducer(
      { ...initialState, itemsUnfolded: { all: false, list: ["1"] } },
      action,
    );

    expect(state.itemsUnfolded.list).toEqual([]);
  });
  it("itemFolded -> list: [id, id2] -> list: [id2]", () => {
    const action = mobileUiActions.itemFolded({ id: "1" });
    const state = mobileUiStateReducer(
      { ...initialState, itemsUnfolded: { all: false, list: ["1", "2"] } },
      action,
    );

    expect(state.itemsUnfolded.list).toEqual(["2"]);
  });
});
