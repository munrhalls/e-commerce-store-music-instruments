import { Store, StoreModule } from "@ngrx/store";
import { metaReducers } from "../../../../../../app.module";
import { TestBed } from "@angular/core/testing";
import { initialState as mobileUiState } from "./../../../mobileUiState/mobileUiState.reducer";
import { mobileUiStateReducer } from "./../../../mobileUiState/mobileUiState.reducer";
import { categoriesReducer } from "./../../../categories.reducer";

export let store: Store;

export const setupTestBed = (
  applyMetaReducers?: "withLocalStorageSync" | "noLocalStorageSync",
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
              mobileUiState: mobileUiState,
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
