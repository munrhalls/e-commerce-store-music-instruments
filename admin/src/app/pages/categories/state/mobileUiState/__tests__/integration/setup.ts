import { Store, StoreModule } from "@ngrx/store";
import { metaReducers } from "../../../../../../app.module";
import { TestBed } from "@angular/core/testing";
import { initialState } from "./../../../mobileUiState/mobileUiState.reducer";
import {
  mobileUiStateReducer,
  MobileUiState,
} from "./../../../mobileUiState/mobileUiState.reducer";
import { categoriesReducer } from "./../../../categories.reducer";

export let store: Store;

export const setupTestBed = (
  applyMetaReducers?: "withLocalStorageSync" | "noLocalStorageSync",
  initialTestState?: MobileUiState,
) => {
  TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot(
        {
          categories: categoriesReducer,
        },
        {
          initialState: {
            categories: {
              categoryTreeState: {
                data: null,
                isLoading: false,
                error: null,
              },
              mobileUiState: initialTestState ? initialTestState : initialState,
            },
          },
          metaReducers:
            applyMetaReducers === "withLocalStorageSync" ? metaReducers : [],
        },
      ),
      StoreModule.forFeature("mobileUiState", mobileUiStateReducer),
    ],
    providers: [Store],
  });
  store = TestBed.inject(Store);
};

describe("SETUP", () => {
  it("should setup TestBed", () => {
    expect(true).toEqual(true);
  });
});
