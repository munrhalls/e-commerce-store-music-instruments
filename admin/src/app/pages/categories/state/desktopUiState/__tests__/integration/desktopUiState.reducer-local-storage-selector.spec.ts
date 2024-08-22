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

  it("action: allItemsUnfoldedToggle -> allItemsUnfoldedToggle: true", () => {
    setupTestBed("withLocalStorageSync");

    testScheduler.run(({ expectObservable }) => {
      const state$ = store.select(selectDesktopUiState);
      const LS$ = new ReplaySubject();
      state$.subscribe(() => {
        const LS = localStorage.getItem("categories");
        const LSParsed = JSON.parse(LS);
        LS$.next(LSParsed.desktopUiState);
      });

      store.dispatch(desktopUiStateActions.allItemsUnfoldedToggle());

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

  it("action: itemUnfolded -> desktopUiState.itemsUnfolded.list: [] -> list: [id]", () => {
    setupTestBed("withLocalStorageSync");

    testScheduler.run(({ expectObservable }) => {
      const state$ = store.select(selectDesktopUiState);
      const LS$ = new ReplaySubject();
      state$.subscribe(() => {
        const LS = localStorage.getItem("categories");
        const LSParsed = JSON.parse(LS);
        LS$.next(LSParsed.desktopUiState);
      });

      store.dispatch(desktopUiStateActions.itemUnfolded({ id: "id" }));

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

  it("action: itemFolded -> desktopUiState.itemsUnfolded.list: [id] -> list: []", () => {
    setupTestBed("withLocalStorageSync");

    testScheduler.run(({ expectObservable }) => {
      const state$ = store.select(selectDesktopUiState);
      const LS$ = new ReplaySubject();
      state$.subscribe(() => {
        const LS = localStorage.getItem("categories");
        const LSParsed = JSON.parse(LS);
        LS$.next(LSParsed.desktopUiState);
      });

      store.dispatch(desktopUiStateActions.itemUnfolded({ id: "1" }));
      store.dispatch(desktopUiStateActions.itemFolded({ id: "1" }));

      expectObservable(LS$).toBe("(abc)", {
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
