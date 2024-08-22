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

export const desktopUiStateReducer = createReducer(initialState);
