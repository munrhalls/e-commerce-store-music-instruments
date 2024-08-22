import { store, setupTestBed } from "./setup";
import { TestScheduler } from "rxjs/testing";
import * as desktopUiStateActions from "../../desktopUiState.actions";
import { selectDesktopUiState } from "../../desktopUiState.selectors";
import { ReplaySubject } from "rxjs";
import { DesktopUiState, initialState } from "../../desktopUiState.reducer";
import { select } from "@ngrx/store";
import { Store } from "@ngrx/store";

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
    setupTestBed("withLocalStorageSync");

    testScheduler.run(({ expectObservable }) => {
      const state$ = store.select(selectDesktopUiState);
      const LS$ = new ReplaySubject();
      state$.subscribe(() => {
        const LS = localStorage.getItem("categories");
        const LSParsed = JSON.parse(LS);
        LS$.next(LSParsed.desktopUiState);
      });

      expectObservable(LS$).toBe("a", {
        a: initialState,
      });
    });
  });

  it("action: menuOpened -> menuOpened: id: 1", () => {
    setupTestBed("withLocalStorageSync");

    testScheduler.run(({ expectObservable }) => {
      const state$ = store.select(selectDesktopUiState);
      const LS$ = new ReplaySubject();
      state$.subscribe(() => {
        const LS = localStorage.getItem("categories");
        const LSParsed = JSON.parse(LS);
        LS$.next(LSParsed.desktopUiState);
      });

      store.dispatch(desktopUiStateActions.menuOpened({ id: "1" }));

      expectObservable(LS$).toBe("(ab)", {
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
            list: [],
          },
          menuOpened: {
            id: "1",
            form: null,
            deleteConfirmationId: null,
          },
        },
      });
    });
  });

  it("initial state: menuOpened 1 && deleteConfirmationId: 1  + action: menuOpened 2 -> state: menuOpened 2 && deleteConfirmationId: null", () => {
    initialTestState = {
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

    setupTestBed("withLocalStorageSync", initialTestState);

    testScheduler.run(({ expectObservable }) => {
      const state$ = store.select(selectDesktopUiState);
      const LS$ = new ReplaySubject();
      state$.subscribe(() => {
        const LS = localStorage.getItem("categories");
        const LSParsed = JSON.parse(LS);
        LS$.next(LSParsed.desktopUiState);
      });

      store.dispatch(desktopUiStateActions.menuOpened({ id: "2" }));

      expectObservable(LS$).toBe("(ab)", {
        a: initialTestState,
        b: {
          selectedTreeId: null,
          itemsUnfolded: {
            all: false,
            list: [],
          },
          menuOpened: {
            id: "2",
            form: null,
            deleteConfirmationId: null,
          },
        },
      });
    });
  });
});
