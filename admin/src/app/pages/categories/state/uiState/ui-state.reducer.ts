import { createReducer } from "@ngrx/store";

export const uiStateFeatureKey = "uiState";

export interface State {}

export const initialState: State = {};

export const uiStateReducer = createReducer(initialState);
