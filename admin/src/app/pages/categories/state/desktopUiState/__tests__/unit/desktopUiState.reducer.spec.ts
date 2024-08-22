import {
  desktopUiStateReducer,
  DesktopUiState,
} from "../../desktopUiState.reducer";
import * as desktopUiActions from "../../desktopUiState.actions";

let initialState: DesktopUiState;

describe("ITEMS UNFOLDED INPUT ACTIONS -> OUTPUT STATE IS PROPER", () => {
  initialState = {
    selectedTreeId: null,
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
    const action = desktopUiActions.allItemsUnfoldedToggle();
    const state = desktopUiStateReducer(initialState, action);

    expect(state.itemsUnfolded.all).toBe(true);
  });
  it("allItemsUnfoldedToggle -> all: true -> all: false", () => {
    const action = desktopUiActions.allItemsUnfoldedToggle();
    const state = desktopUiStateReducer(
      { ...initialState, itemsUnfolded: { all: true, list: [] } },
      action,
    );

    expect(state.itemsUnfolded.all).toBe(false);
  });
  it("itemUnfolded -> list: [] -> list: [id]", () => {
    const action = desktopUiActions.itemUnfolded({ id: "1" });
    const state = desktopUiStateReducer(initialState, action);

    expect(state.itemsUnfolded.list).toEqual(["1"]);
  });
  it("itemUnfolded -> list: [id] -> list: [id, id2]", () => {
    const action = desktopUiActions.itemUnfolded({ id: "2" });
    const state = desktopUiStateReducer(
      { ...initialState, itemsUnfolded: { all: false, list: ["1"] } },
      action,
    );

    expect(state.itemsUnfolded.list).toEqual(["1", "2"]);
  });
  it("itemFolded -> list: [id] -> list: []", () => {
    const action = desktopUiActions.itemFolded({ id: "1" });
    const state = desktopUiStateReducer(
      { ...initialState, itemsUnfolded: { all: false, list: ["1"] } },
      action,
    );

    expect(state.itemsUnfolded.list).toEqual([]);
  });
  it("itemFolded -> list: [id, id2] -> list: [id2]", () => {
    const action = desktopUiActions.itemFolded({ id: "1" });
    const state = desktopUiStateReducer(
      { ...initialState, itemsUnfolded: { all: false, list: ["1", "2"] } },
      action,
    );

    expect(state.itemsUnfolded.list).toEqual(["2"]);
  });
});

describe("MENU OPENED INPUT ACTIONS -> OUTPUT STATE IS PROPER", () => {
  initialState = {
    selectedTreeId: null,
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

  it("menuOpened -> id: null -> id: '1'", () => {
    const action = desktopUiActions.menuOpened({ id: "1" });
    const state = desktopUiStateReducer(initialState, action);

    expect(state.menuOpened.id).toBe("1");
  });
  it("menuOpened -> id: '1' -> id: '2'", () => {
    const action = desktopUiActions.menuOpened({ id: "2" });
    const state = desktopUiStateReducer(
      {
        ...initialState,
        menuOpened: { id: "1", form: null, deleteConfirmationId: null },
      },
      action,
    );

    expect(state.menuOpened.id).toBe("2");
  });
  it("menuClosed -> id: '1' -> id: null", () => {
    initialState.menuOpened.id = "1";
    const action = desktopUiActions.menuClosed();
    const state = desktopUiStateReducer(initialState, action);

    expect(state.menuOpened.id).toBeNull();
  });
  // FORM ADD / EDIT / DELETE
  it("menuOpened -> form: null -> form: 'add'", () => {
    initialState.menuOpened.id = "1";
    const action = desktopUiActions.addFormOpened();
    const state = desktopUiStateReducer(initialState, action);
    expect(state.menuOpened.form).toBe("add");
  });
  it("menuOpened -> form: null -> form: 'edit'", () => {
    initialState.menuOpened.id = "1";
    const action = desktopUiActions.editFormOpened();
    const state = desktopUiStateReducer(initialState, action);
    expect(state.menuOpened.form).toBe("edit");
  });
  it("menuOpened -> form: null -> form: 'delete'", () => {
    initialState.menuOpened.id = "1";
    const action = desktopUiActions.deleteFormOpened();
    const state = desktopUiStateReducer(initialState, action);
    expect(state.menuOpened.form).toBe("delete");
    expect(state.menuOpened.deleteConfirmationId).toBe("1");
  });
  it("menuOpened -> form: 'delete' -> form: null", () => {
    initialState.menuOpened.id = "1";
    initialState.menuOpened.form = "delete";
    const action = desktopUiActions.deleteFormClosed();
    const state = desktopUiStateReducer(initialState, action);
    expect(state.menuOpened.form).toBeNull();
    expect(state.menuOpened.deleteConfirmationId).toBeNull();
  });
  // MENU OPENED -> ANOTHER MENU OPENED -> PREVIOUS MENU ALL RESET
  it("menuOpened -> id: '1' -> id: '2' -> id: '2'", () => {
    initialState = {
      selectedTreeId: null,
      itemsUnfolded: {
        all: false,
        list: [],
      },
      menuOpened: {
        id: "1",
        form: "delete",
        deleteConfirmationId: "1",
      },
    };

    const action = desktopUiActions.menuOpened({ id: "2" });
    const state = desktopUiStateReducer(initialState, action);
    expect(state.menuOpened.id).toBe("2");
    expect(state.menuOpened.form).toBeNull();
    expect(state.menuOpened.deleteConfirmationId).toBeNull();
  });
});
