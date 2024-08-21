import {
  mobileUiStateReducer,
  MobileUiState,
} from "../../mobileUiState.reducer";
import * as mobileUiActions from "../../mobileUiState.actions";

let initialState: MobileUiState;

describe("MENU OPENED INPUT ACTIONS -> OUTPUT STATE IS PROPER", () => {
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

  it("menuOpened -> id: null -> id: '1'", () => {
    const action = mobileUiActions.menuOpened({ id: "1" });
    const state = mobileUiStateReducer(initialState, action);

    expect(state.menuOpened.id).toBe("1");
  });
  it("menuOpened -> id: '1' -> id: '2'", () => {
    const action = mobileUiActions.menuOpened({ id: "2" });
    const state = mobileUiStateReducer(
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
    const action = mobileUiActions.menuClosed();
    const state = mobileUiStateReducer(initialState, action);

    expect(state.menuOpened.id).toBeNull();
  });
  // FORM ADD / EDIT / DELETE
  it("menuOpened -> form: null -> form: 'add'", () => {
    initialState.menuOpened.id = "1";
    const action = mobileUiActions.addFormOpened();
    const state = mobileUiStateReducer(initialState, action);
    expect(state.menuOpened.form).toBe("add");
  });
  it("menuOpened -> form: null -> form: 'edit'", () => {
    initialState.menuOpened.id = "1";
    const action = mobileUiActions.editFormOpened();
    const state = mobileUiStateReducer(initialState, action);
    expect(state.menuOpened.form).toBe("edit");
  });
  it("menuOpened -> form: null -> form: 'delete'", () => {
    initialState.menuOpened.id = "1";
    const action = mobileUiActions.deleteFormOpened();
    const state = mobileUiStateReducer(initialState, action);
    expect(state.menuOpened.form).toBe("delete");
    expect(state.menuOpened.deleteConfirmationId).toBe("1");
  });
  it("menuOpened -> form: 'delete' -> form: null", () => {
    initialState.menuOpened.id = "1";
    initialState.menuOpened.form = "delete";
    const action = mobileUiActions.deleteFormClosed();
    const state = mobileUiStateReducer(initialState, action);
    expect(state.menuOpened.form).toBeNull();
    expect(state.menuOpened.deleteConfirmationId).toBeNull();
  });
  // MENU OPENED -> ANOTHER MENU OPENED -> PREVIOUS MENU ALL RESET
  it("menuOpened -> id: '1' -> id: '2' -> id: '2'", () => {
    initialState = {
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

    const action = mobileUiActions.menuOpened({ id: "2" });
    const state = mobileUiStateReducer(initialState, action);
    expect(state.menuOpened.id).toBe("2");
    expect(state.menuOpened.form).toBeNull();
    expect(state.menuOpened.deleteConfirmationId).toBeNull();
  });
});
