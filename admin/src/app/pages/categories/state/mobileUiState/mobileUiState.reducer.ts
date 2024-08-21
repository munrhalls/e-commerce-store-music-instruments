import { createReducer, on } from "@ngrx/store";
import * as mobileUiActions from "./mobileUiState.actions";

export const uiStateFeatureKey = "mobileUiState";

type FormState = string | null;

export interface MobileUiState {
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

export const initialState: MobileUiState = {
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

export const mobileUiStateReducer = createReducer(
  initialState,
  // UNFOLDED
  on(mobileUiActions.allItemsUnfoldedToggle, (state) => ({
    ...state,
    itemsUnfolded: {
      ...state.itemsUnfolded,
      all: !state.itemsUnfolded.all,
    },
  })),
  on(mobileUiActions.itemUnfolded, (state, { id }) => ({
    ...state,
    itemsUnfolded: {
      ...state.itemsUnfolded,
      list: [...state.itemsUnfolded.list, id],
    },
  })),
  on(mobileUiActions.itemFolded, (state, { id }) => ({
    ...state,
    itemsUnfolded: {
      ...state.itemsUnfolded,
      list: state.itemsUnfolded.list.filter((item) => item !== id),
    },
  })),
  // MENU
  on(mobileUiActions.menuOpened, (state, { id }) => ({
    ...state,
    menuOpened: {
      id,
      form: null,
      deleteConfirmationId: null,
    },
  })),
  on(mobileUiActions.menuClosed, (state) => ({
    ...state,
    menuOpened: {
      id: null,
      form: null,
      deleteConfirmationId: null,
    },
  })),
  on(mobileUiActions.addFormOpened, (state) => ({
    ...state,
    menuOpened: {
      ...state.menuOpened,
      form: "add",
    },
  })),
  on(mobileUiActions.addFormClosed, (state) => ({
    ...state,
    menuOpened: {
      ...state.menuOpened,
      form: null,
    },
  })),
  on(mobileUiActions.editFormOpened, (state) => ({
    ...state,
    menuOpened: {
      ...state.menuOpened,
      form: "edit",
    },
  })),
  on(mobileUiActions.editFormClosed, (state) => ({
    ...state,
    menuOpened: {
      ...state.menuOpened,
      form: null,
    },
  })),
  on(mobileUiActions.deleteFormOpened, (state) => ({
    ...state,
    menuOpened: {
      id: state.menuOpened.id,
      form: "delete",
      deleteConfirmationId: state.menuOpened.id,
    },
  })),
  on(mobileUiActions.deleteFormClosed, (state) => ({
    ...state,
    menuOpened: {
      ...state.menuOpened,
      form: null,
      deleteConfirmationId: null,
    },
  })),
);
