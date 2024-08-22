import { setupTestBed } from "./setup";
import { TestScheduler } from "rxjs/testing";
import * as desktopUiStateActions from "../../../desktopUiState/desktopUiState.actions";
import { selectDesktopUiState } from "../../../desktopUiState/desktopUiState.selectors";
import { ReplaySubject } from "rxjs";
import {
  DesktopUiState,
  initialState,
} from "../../../desktopUiState/desktopUiState.reducer";
import { select } from "@ngrx/store";
import { Store } from "@ngrx/store";
import { store } from "./setup";

let initialTestState: DesktopUiState;

describe("INPUT ACTIONS -> OUTPUT SELECTOR STATE PROPER", () => {
  let testScheduler;

  beforeEach(() => {
    localStorage.clear();
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it("selector -> desktopUiState", () => {
    setupTestBed();

    testScheduler.run(({ expectObservable }) => {
      const state$ = store.select(selectDesktopUiState);

      expectObservable(state$).toBe("a", {
        a: initialState,
      });
    });
  });

  it("action: allItemsUnfoldedToggle -> desktopUiState.itemsUnfolded update: allItemsUnfoldedToggle: false -> allItemsUnfoldedToggle: true", () => {
    setupTestBed();

    testScheduler.run(({ expectObservable }) => {
      const state$ = store.select(selectDesktopUiState);
      const stateReplay$ = new ReplaySubject();
      state$.subscribe((state) => {
        stateReplay$.next(state);
      });

      store.dispatch(desktopUiStateActions.allItemsUnfoldedToggle());

      expectObservable(stateReplay$).toBe("(ab)", {
        a: {
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
        },
        b: {
          selectedTreeId: null,

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

  it("action: itemUnfolded -> desktopUiState.itemsUnfolded update: list: [] -> list: [id]", () => {
    setupTestBed();

    testScheduler.run(({ expectObservable }) => {
      const state$ = store.select(selectDesktopUiState);
      const stateReplay$ = new ReplaySubject();
      state$.subscribe((state) => {
        stateReplay$.next(state);
      });

      store.dispatch(desktopUiStateActions.itemUnfolded({ id: "id" }));

      expectObservable(stateReplay$).toBe("(ab)", {
        a: {
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
        },
        b: {
          selectedTreeId: null,

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

  it("action: itemFolded -> desktopUiState.itemsUnfolded update: list: [id] -> list: []", () => {
    testScheduler.run(({ expectObservable }) => {
      setupTestBed();

      const state$ = store.select(selectDesktopUiState);
      const stateReplay$ = new ReplaySubject();
      state$.subscribe((state) => {
        stateReplay$.next(state);
      });

      store.dispatch(desktopUiStateActions.itemUnfolded({ id: "1" }));
      store.dispatch(desktopUiStateActions.itemFolded({ id: "1" }));

      expectObservable(stateReplay$).toBe("(abc)", {
        a: {
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
        },
        b: {
          selectedTreeId: null,

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
        },
      });
    });
  });
});
