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

let initialTestState: MobileUiState;

describe("INPUT ACTIONS -> OUTPUT SELECTOR STATE PROPER", () => {
  let testScheduler;

  beforeEach(() => {
    localStorage.clear();
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

  it("action: itemUnfolded -> mobileUiState.itemsUnfolded update: list: [] -> list: [id]", () => {
    setupTestBed();

    testScheduler.run(({ expectObservable }) => {
      const state$ = store.select(selectMobileUiState);
      const stateReplay$ = new ReplaySubject();
      state$.subscribe((state) => {
        stateReplay$.next(state);
      });

      store.dispatch(mobileUiStateActions.itemUnfolded({ id: "id" }));

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
            all: false,
            list: ["id"],
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

  it("action: itemFolded -> mobileUiState.itemsUnfolded update: list: [id] -> list: []", () => {
    testScheduler.run(({ expectObservable }) => {
      setupTestBed();

      const state$ = store.select(selectMobileUiState);
      const stateReplay$ = new ReplaySubject();
      state$.subscribe((state) => {
        stateReplay$.next(state);
      });

      store.dispatch(mobileUiStateActions.itemUnfolded({ id: "1" }));
      store.dispatch(mobileUiStateActions.itemFolded({ id: "1" }));

      expectObservable(stateReplay$).toBe("(abc)", {
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
            all: false,
            list: ["1"],
          },
          menuOpened: {
            id: null,
            form: null,
            deleteConfirmationId: null,
          },
        },
        c: {
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
      });
    });
  });
});
