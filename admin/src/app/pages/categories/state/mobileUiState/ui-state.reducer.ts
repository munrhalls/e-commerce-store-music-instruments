import { createReducer } from "@ngrx/store";

export const uiStateFeatureKey = "mobileUiState";

export interface MobileUiState {
  itemsUnfolded: {
    all: boolean;
    list: string[];
  };
  menuOpened: {
    id: string | null;
    form: "add" | "edit" | null;
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

export const mobileUiStateReducer = createReducer(initialState);
