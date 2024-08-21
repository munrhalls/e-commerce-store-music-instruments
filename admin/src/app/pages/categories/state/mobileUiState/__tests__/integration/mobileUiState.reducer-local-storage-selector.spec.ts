import { setupTestBed } from "./setup";
import { TestScheduler } from "rxjs/testing";
import * as mobileUiStateActions from "./../../../mobileUiState/mobileUiState.actions";
import { selectMobileUiState } from "./../../../mobileUiState/mobileUiState.selectors";
import { ReplaySubject } from "rxjs";
import {
  MobileUiState,
  initialState,
} from "./../../../mobileUiState/mobileUiState.reducer";
import { select } from "@ngrx/store";
import { Store } from "@ngrx/store";
import { store } from "./setup";

describe("INPUT ACTIONS -> OUTPUT SELECTOR STATE PROPER", () => {
  let testScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it("action: allItemsUnfoldedToggle -> mobileUiState.itemsUnfolded update: allItemsUnfoldedToggle: false -> allItemsUnfoldedToggle: true", () => {
    setupTestBed();

    testScheduler.run(({ expectObservable }) => {
      const state$ = store.select(selectMobileUiState);
      const stateReplay$ = new ReplaySubject();
      state$.subscribe((state) => {
        stateReplay$.next(state);
      });

      store.dispatch(mobileUiStateActions.allItemsUnfoldedToggle());

      expectObservable(stateReplay$).toBe("(ab)", {
        a: {
          itemsUnfolded: {
            all: false,
            list: [],
          },
          menuOpened: {
            id: null,
            form: null,
            deleteConfirmationId: null,
          },
        },
        b: {
          itemsUnfolded: {
            all: true,
            list: [],
          },
          menuOpened: {
            id: null,
            form: null,
            deleteConfirmationId: null,
          },
        },
      });
    });
  });
});
