import { setupTestBed } from "./setup";
import { TestScheduler } from "rxjs/testing";
import * as mobileUiStateActions from "../../mobileUiState.actions";
import { selectMobileUiState } from "../../mobileUiState.selectors";
import { ReplaySubject } from "rxjs";
import { MobileUiState, initialState } from "../../mobileUiState.reducer";
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

  it("selector -> mobileUiState", () => {
    setupTestBed("withLocalStorageSync");

    testScheduler.run(({ expectObservable }) => {
      const state$ = store.select(selectMobileUiState);
      const LS$ = new ReplaySubject();
      state$.subscribe(() => {
        const LS = localStorage.getItem("categories");
        const LSParsed = JSON.parse(LS);
        LS$.next(LSParsed.mobileUiState);
      });

      expectObservable(LS$).toBe("a", {
        a: initialState,
      });
    });
  });

  it("action: menuOpened -> menuOpened: id: 1", () => {
    setupTestBed("withLocalStorageSync");

    testScheduler.run(({ expectObservable }) => {
      const state$ = store.select(selectMobileUiState);
      const LS$ = new ReplaySubject();
      state$.subscribe(() => {
        const LS = localStorage.getItem("categories");
        const LSParsed = JSON.parse(LS);
        LS$.next(LSParsed.mobileUiState);
      });

      store.dispatch(mobileUiStateActions.menuOpened({ id: "1" }));

      expectObservable(LS$).toBe("(ab)", {
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
      itemsUnfolded: {
        all: false,
        list: [],
      },
      menuOpened: {
        id: "1",
        form: null,
        deleteConfirmationId: "1",
      },
    };

    setupTestBed("withLocalStorageSync", initialTestState);

    testScheduler.run(({ expectObservable }) => {
      const state$ = store.select(selectMobileUiState);
      const LS$ = new ReplaySubject();
      state$.subscribe(() => {
        const LS = localStorage.getItem("categories");
        const LSParsed = JSON.parse(LS);
        LS$.next(LSParsed.mobileUiState);
      });

      store.dispatch(mobileUiStateActions.menuOpened({ id: "2" }));

      expectObservable(LS$).toBe("(ab)", {
        a: initialTestState,
        b: {
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
