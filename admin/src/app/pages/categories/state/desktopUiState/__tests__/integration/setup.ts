import { Store, StoreModule } from "@ngrx/store";
import { metaReducers } from "../../../../../../app.module";
import { TestBed } from "@angular/core/testing";
import { initialState } from "./../../../desktopUiState/desktopUiState.reducer";
import {
  desktopUiStateReducer,
  DesktopUiState,
} from "./../../../desktopUiState/desktopUiState.reducer";
import { categoriesReducer } from "./../../../categories.reducer";

export let store: Store;

export const setupTestBed = (
  applyMetaReducers?: "withLocalStorageSync" | "noLocalStorageSync",
  initialTestState?: DesktopUiState,
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
              mobileUiState: null,
              desktopUiState: initialTestState
                ? initialTestState
                : initialState,
            },
          },
          metaReducers:
            applyMetaReducers === "withLocalStorageSync" ? metaReducers : [],
        },
      ),
      StoreModule.forFeature("desktopUiState", desktopUiStateReducer),
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
