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

  // it("action: allItemsUnfoldedToggle -> mobileUiState.itemsUnfolded update: allItemsUnfoldedToggle: false -> allItemsUnfoldedToggle: true", () => {
  //   testScheduler.run(({ expectObservable }) => {
  //     setupTestBed("withLocalStorageSync");
  //     const state$ = store.select(selectMobileUiState);
  //     const LS$ = new ReplaySubject();
  //     state$.subscribe(() => {
  //       const LS = localStorage.getItem("categories");
  //       const LSParsed = JSON.parse(LS);
  //       LS$.next(LSParsed.mobileUiState);
  //     });

  //     store.dispatch(mobileUiStateActions.allItemsUnfoldedToggle());

  //     expectObservable(LS$).toBe("(ab)", {
  //       a: {
  //         itemsUnfolded: {
  //           all: false,
  //           list: [],
  //         },
  //         menuOpened: {
  //           id: null,
  //           form: null,
  //           deleteConfirmationId: null,
  //         },
  //       },
  //       b: {
  //         itemsUnfolded: {
  //           all: true,
  //           list: [],
  //         },
  //         menuOpened: {
  //           id: null,
  //           form: null,
  //           deleteConfirmationId: null,
  //         },
  //       },
  //     });
  //   });
  // });

  // it("action: itemUnfolded -> mobileUiState.itemsUnfolded update: list: [] -> list: [id]", () => {
  //   setupTestBed("withLocalStorageSync");

  //   testScheduler.run(({ expectObservable }) => {
  //     const state$ = store.select(selectMobileUiState);
  //     const LS$ = new ReplaySubject();
  //     const LS$ = new ReplaySubject();
  // state$.subscribe(() => {
  //   const LS = localStorage.getItem("categories");
  //   const LSParsed = JSON.parse(LS);
  //   LS$.next(LSParsed.mobileUiState);
  // });

  //     store.dispatch(mobileUiStateActions.itemUnfolded({ id: "id" }));

  //     expectObservable(LS$).toBe("(ab)", {
  //       a: {
  //         itemsUnfolded: {
  //           all: false,
  //           list: [],
  //         },
  //         menuOpened: {
  //           id: null,
  //           form: null,
  //           deleteConfirmationId: null,
  //         },
  //       },
  //       b: {
  //         itemsUnfolded: {
  //           all: false,
  //           list: ["id"],
  //         },
  //         menuOpened: {
  //           id: null,
  //           form: null,
  //           deleteConfirmationId: null,
  //         },
  //       },
  //     });
  //   });
  // });

  // it("action: itemFolded -> mobileUiState.itemsUnfolded update: list: [id] -> list: []", () => {
  //   testScheduler.run(({ expectObservable }) => {
  //     setupTestBed("withLocalStorageSync");

  //     const state$ = store.select(selectMobileUiState);
  //     const LS$ = new ReplaySubject();
  //     const LS$ = new ReplaySubject();
  // state$.subscribe(() => {
  //   const LS = localStorage.getItem("categories");
  //   const LSParsed = JSON.parse(LS);
  //   LS$.next(LSParsed.mobileUiState);
  // });

  //     store.dispatch(mobileUiStateActions.itemUnfolded({ id: "1" }));
  //     store.dispatch(mobileUiStateActions.itemFolded({ id: "1" }));

  //     expectObservable(LS$).toBe("(abc)", {
  //       a: {
  //         itemsUnfolded: {
  //           all: false,
  //           list: [],
  //         },
  //         menuOpened: {
  //           id: null,
  //           form: null,
  //           deleteConfirmationId: null,
  //         },
  //       },
  //       b: {
  //         itemsUnfolded: {
  //           all: false,
  //           list: ["1"],
  //         },
  //         menuOpened: {
  //           id: null,
  //           form: null,
  //           deleteConfirmationId: null,
  //         },
  //       },
  //       c: {
  //         itemsUnfolded: {
  //           all: false,
  //           list: [],
  //         },
  //         menuOpened: {
  //           id: null,
  //           form: null,
  //           deleteConfirmationId: null,
  //         },
  //       },
  //     });
  //   });
  // });
});
