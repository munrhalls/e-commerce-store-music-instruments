import { createReducer, on } from "@ngrx/store";
import * as desktopUiActions from "./desktopUiState.actions";

export const uiStateFeatureKey = "desktopUiState";

type FormState = string | null;

export interface DesktopUiState {
  selectedTreeId: string | null;
  itemsUnfolded: {
    all: boolean;
    list: string[];
  };
  menuOpened: {
    id: string | null;
    form: FormState;
    deleteConfirmationId: string | null;
  };
}

export const initialState: DesktopUiState = {
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

export const desktopUiStateReducer = createReducer(
  initialState,
  // UNFOLDED
  on(desktopUiActions.allItemsUnfoldedToggle, (state) => ({
    ...state,
    itemsUnfolded: {
      ...state.itemsUnfolded,
      all: !state.itemsUnfolded.all,
    },
  })),
  on(desktopUiActions.itemUnfolded, (state, { id }) => ({
    ...state,
    itemsUnfolded: {
      ...state.itemsUnfolded,
      list: [...state.itemsUnfolded.list, id],
    },
  })),
  on(desktopUiActions.itemFolded, (state, { id }) => ({
    ...state,
    itemsUnfolded: {
      ...state.itemsUnfolded,
      list: [...state.itemsUnfolded.list.filter((elId) => elId !== id)],
    },
  })),
  // MENU
  on(desktopUiActions.menuOpened, (state, { id }) => ({
    ...state,
    menuOpened: {
      id,
      form: null,
      deleteConfirmationId: null,
    },
  })),
  on(desktopUiActions.menuClosed, (state) => ({
    ...state,
    menuOpened: {
      id: null,
      form: null,
      deleteConfirmationId: null,
    },
  })),
  on(desktopUiActions.addFormOpened, (state) => ({
    ...state,
    menuOpened: {
      ...state.menuOpened,
      form: "add",
    },
  })),
  on(desktopUiActions.addFormClosed, (state) => ({
    ...state,
    menuOpened: {
      ...state.menuOpened,
      form: null,
    },
  })),
  on(desktopUiActions.editFormOpened, (state) => ({
    ...state,
    menuOpened: {
      ...state.menuOpened,
      form: "edit",
    },
  })),
  on(desktopUiActions.editFormClosed, (state) => ({
    ...state,
    menuOpened: {
      ...state.menuOpened,
      form: null,
    },
  })),
  on(desktopUiActions.deleteFormOpened, (state) => ({
    ...state,
    menuOpened: {
      id: state.menuOpened.id,
      form: "delete",
      deleteConfirmationId: state.menuOpened.id,
    },
  })),
  on(desktopUiActions.deleteFormClosed, (state) => ({
    ...state,
    menuOpened: {
      ...state.menuOpened,
      form: null,
      deleteConfirmationId: null,
    },
  })),
);
