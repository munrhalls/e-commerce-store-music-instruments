import * as categoryTreeActions from "../../category-tree.actions";
import { Action } from "@ngrx/store";
import { CategoriesService } from "../../../../categories.service";
import { ServerConnectionError } from "../../../../../../@core/error-handler/errors/serverConnectionError";

import { selectCategoryTree } from "../../category-tree.selectors";
import { select } from "@ngrx/store";

import { store, effects } from "./setup";
import { selectCategories } from "../../../categories.selector";
import { CategoryTreeState } from "../../category-tree.reducer";

import { setupTestBed } from "./setup";

import { of, ReplaySubject, throwError } from "rxjs";
import { TestScheduler } from "rxjs/testing";
import { TestBed } from "@angular/core/testing";

let mockCategoriesService: CategoriesService;
let testScheduler: TestScheduler;

afterEach(() => {
  TestBed.resetTestingModule();
  mockCategoriesService;
  testScheduler;
});

beforeEach(() => {
  localStorage.clear();
  if (localStorage.getItem("categories") !== null) {
    throwError("Tests cannot run. Local storage not cleared.");
  }

  testScheduler = new TestScheduler((actual, expected) => {
    // console.log("actual...", actual);
    // console.log("expected...", expected);
    expect(actual).toEqual(expected);
  });
});

describe("LS-STORE SYNC: INITIAL STATE", () => {
  it("local storage should contain categories state replica", () => {
    mockCategoriesService = {} as unknown as CategoriesService;
    setupTestBed(mockCategoriesService);

    testScheduler.run((helpers) => {
      // ARRANGE
      const actualState$ = store.pipe(select(selectCategories));
      // ACT
      const localStorageState = localStorage.getItem("categories");

      // ASSERT
      expect(localStorageState).not.toBeNull();

      const parsedLocalStorageState = JSON.parse(localStorageState);
      helpers.expectObservable(actualState$).toBe("a", {
        a: parsedLocalStorageState,
      });
    });
  });
  it("local storage replica should contain replica of categoryTree", () => {
    mockCategoriesService = {} as unknown as CategoriesService;
    setupTestBed(mockCategoriesService);

    testScheduler.run((helpers) => {
      // ARRANGE
      const actualState$ = store.pipe(select(selectCategoryTree));

      // ACT
      const localStorageState = localStorage.getItem("categories");

      // ASSERT
      expect(localStorageState).not.toBeNull();

      const parsedLocalStorageState = JSON.parse(localStorageState);
      helpers.expectObservable(actualState$).toBe("a", {
        a: parsedLocalStorageState.categoryTree,
      });
    });
  });
});

describe("LS-STORE SYNC: CREATE", () => {
  it("LS and STATE should equal on states: initial -> wait for api -> outcome", () => {
    const newCategory = {
      id: "mock",
      name: "mock category",
      pathIds: ["mock"],
      children: [],
    };
    const entireCategoriesTreeUpdated = {
      id: "root",
      name: "root",
      pathIds: ["root"],
      children: [newCategory],
    };
    mockCategoriesService = {
      addCategory: jest.fn(() => of(entireCategoriesTreeUpdated)),
    } as unknown as CategoriesService;
    setupTestBed(mockCategoriesService);

    // ARRANGE
    testScheduler.run((helpers) => {
      const LSTreeState$ = new ReplaySubject<CategoryTreeState>();

      const actualTreeState$ = store.pipe(select(selectCategoryTree));
      actualTreeState$.subscribe((state) => {
        const localStorageState = JSON.parse(
          localStorage.getItem("categories"),
        );
        LSTreeState$.next(localStorageState.categoryTree);
      });

      store.dispatch(
        categoryTreeActions.apiAdd({ targetPathIds: ["root"], newCategory }),
      );

      const expectedLocalStorageValues = {
        a: {
          categoryTree: {
            data: null,
            isLoading: false,
            error: null,
          },
        },
        b: {
          categoryTree: {
            data: null,
            isLoading: true,
            error: null,
          },
        },
        c: {
          categoryTree: {
            data: entireCategoriesTreeUpdated,
            isLoading: false,
            error: null,
          },
        },
      };

      helpers
        .expectObservable(LSTreeState$)
        .toBe("(abc)", expectedLocalStorageValues);
    });
  });

  //   //   it("local storage state replica should reflect progression of 3 changes in state right during/after ERROR CREATE operation", () => {
  //   //     const newCategory = {
  //   //       id: "mock",
  //   //       name: "mock category",
  //   //       pathIds: ["mock"],
  //   //       children: [],
  //   //     };
  //   //     const entireCategoriesTreeUpdated = {
  //   //       id: "root",
  //   //       name: "root",
  //   //       pathIds: ["root"],
  //   //       children: [newCategory],
  //   //     };
  //   //     mockCategoriesService = {
  //   //       addCategory: jest.fn(() => {
  //   //         return throwError(new Error("api err"));
  //   //       }),
  //   //     } as unknown as CategoriesService;
  //   //     setupTestBed(mockCategoriesService);

  //   //     // ARRANGE
  //   //     testScheduler.run((helpers) => {
  //   //       const LSTreeState$ = new ReplaySubject<CategoryTreeState>();

  //   //       const actualTreeState$ = store.pipe(select(selectCategoryTree));

  //   //       actualTreeState$.subscribe((state) => {
  //   //         const localStorageState = JSON.parse(
  //   //           localStorage.getItem("categories"),
  //   //         );
  //   //         LSTreeState$.next(localStorageState.categoryTree);
  //   //       });

  //   //       store.dispatch(
  //   //         categoryTreeActions.apiAdd({ targetPathIds: ["root"], newCategory }),
  //   //       );

  //   //       const expectedLocalStorageValues = {
  //   //         a: {
  //   //           categoryTree: {
  //   //             data: null,
  //   //             isLoading: false,
  //   //             error: null,
  //   //           },
  //   //         },
  //   //         b: {
  //   //           categoryTree: {
  //   //             data: null,
  //   //             isLoading: true,
  //   //             error: null,
  //   //           },
  //   //         },
  //   //         c: {
  //   //           categoryTree: {
  //   //             data: null,
  //   //             isLoading: false,
  //   //             error: "API error",
  //   //           },
  //   //         },
  //   //       };

  //   //       helpers
  //   //         .expectObservable(LSTreeState$)
  //   //         .toBe("(abc)", expectedLocalStorageValues);
  //   //     });
  //   //   });
});

//   // describe("LOCAL STORAGE STAYS IN SYNC WITH STATE VIA NGRX META-REDUCER: READ OPERATION", () => {
//   //   it("local storage state replica should reflect progression of 3 changes in state right during/after SUCCESSFUL READ operation", () => {
//   //     const entireCategoriesTree = {
//   //       id: "root",
//   //       name: "root",
//   //       pathIds: ["root"],
//   //       children: [],
//   //     };
//   //     mockCategoriesService = {
//   //       fetchCategoryTree: jest.fn(() => of(entireCategoriesTree)),
//   //     } as unknown as CategoriesService;
//   //     setupTestBed(mockCategoriesService);

//   //     // ARRANGE
//   //     testScheduler.run((helpers) => {
//   //       const LSTreeState$ = new ReplaySubject<CategoryTreeState>();

//   //       const actualTreeState$ = store.pipe(select(selectCategoryTree));
//   //       actualTreeState$.subscribe((state) => {
//   //         const localStorageState = JSON.parse(
//   //           localStorage.getItem("categories"),
//   //         );
//   //         LSTreeState$.next(localStorageState.categoryTree);
//   //       });

//   //       store.dispatch(categoryTreeActions.apiLoad());

//   //       const expectedLocalStorageValues = {
//   //         a: {
//   //           categoryTree: {
//   //             data: null,
//   //             isLoading: false,
//   //             error: null,
//   //           },
//   //         },
//   //         b: {
//   //           categoryTree: {
//   //             data: null,
//   //             isLoading: true,
//   //             error: null,
//   //           },
//   //         },
//   //         c: {
//   //           categoryTree: {
//   //             data: entireCategoriesTree,
//   //             isLoading: false,
//   //             error: null,
//   //           },
//   //         },
//   //       };

//   //       helpers
//   //         .expectObservable(LSTreeState$)
//   //         .toBe("(abc)", expectedLocalStorageValues);
//   //     });
//   //   });

//   //   it("local storage state replica should reflect progression of 3 changes in state right during/after ERROR READ operation", () => {
//   //     mockCategoriesService = {
//   //       fetchCategoryTree: jest.fn(() => {
//   //         return throwError(new Error("api err"));
//   //       }),
//   //     } as unknown as CategoriesService;
//   //     setupTestBed(mockCategoriesService);

//   //     // ARRANGE
//   //     testScheduler.run((helpers) => {
//   //       const LSTreeState$ = new ReplaySubject<CategoryTreeState>();

//   //       const actualTreeState$ = store.pipe(select(selectCategoryTree));

//   //       actualTreeState$.subscribe((state) => {
//   //         const localStorageState = JSON.parse(
//   //           localStorage.getItem("categories"),
//   //         );
//   //         LSTreeState$.next(localStorageState.categoryTree);
//   //       });

//   //       store.dispatch(categoryTreeActions.apiLoad());

//   //       const expectedLocalStorageValues = {
//   //         a: {
//   //           categoryTree: {
//   //             data: null,
//   //             isLoading: false,
//   //             error: null,
//   //           },
//   //         },
//   //         b: {
//   //           categoryTree: {
//   //             data: null,
//   //             isLoading: true,
//   //             error: null,
//   //           },
//   //         },
//   //         c: {
//   //           categoryTree: {
//   //             data: null,
//   //             isLoading: false,
//   //             error: "API error",
//   //           },
//   //         },
//   //       };

//   //       helpers
//   //         .expectObservable(LSTreeState$)
//   //         .toBe("(abc)", expectedLocalStorageValues);
//   //     });
//   //   });
//   // });

//   // describe("LOCAL STORAGE STAYS IN SYNC WITH STATE PROGRESSIONS VIA NGRX META-REDUCER: ADD, THEN DELETE", () => {
//   //   it("local storage state replica should reflect progression of 3 changes in state right during/after SUCCESSFUL DELETE operation", () => {
//   //     const newCategory = {
//   //       id: "mock",
//   //       name: "mock category",
//   //       pathIds: ["root", "mock"],
//   //       children: [],
//   //     };
//   //     const entireCategoriesTree = {
//   //       id: "root",
//   //       name: "root",
//   //       pathIds: ["root"],
//   //       children: [],
//   //     };
//   //     const entireCategoriesTreeAfterAdd = {
//   //       id: "root",
//   //       name: "root",
//   //       pathIds: ["root"],
//   //       children: [newCategory],
//   //     };
//   //     const entireCategoriesTreeAfterDelete = {
//   //       id: "root",
//   //       name: "root",
//   //       pathIds: ["root"],
//   //       children: [],
//   //     };

//   //     mockCategoriesService = {
//   //       addCategory: jest.fn(() => of(entireCategoriesTreeAfterAdd)),
//   //       deleteCategory: jest.fn(() => of(entireCategoriesTreeAfterDelete)),
//   //     } as unknown as CategoriesService;

//   //     const initialState = {
//   //       categoryTreeState: {
//   //         categoryTree: {
//   //           data: entireCategoriesTree,
//   //           isLoading: false,
//   //           error: null,
//   //         },
//   //       },
//   //       uiState: null,
//   //     };

//   //     setupTestBed(mockCategoriesService, initialState);

//   //     // ARRANGE
//   //     testScheduler.run((helpers) => {
//   //         const LSTreeState$ = new ReplaySubject<CategoryTreeState>();
//   //         const actualTreeState$ = store.pipe(select(selectCategoryTree));
//   //         let counter = 0;
//   //         actualTreeState$.subscribe((state) => {
//   //           if (counter === 0) {
//   //             console.log(state);
//   //           }
//   //           counter++;
//   //           console.log("STATE CHANGE");
//   //           const localStorageState = JSON.parse(
//   //             localStorage.getItem("categories"),
//   //           );
//   //           LSTreeState$.next(localStorageState.categoryTree);
//   //         });
//   //         store.dispatch(
//   //           categoryTreeActions.apiAdd({ targetPathIds: ["root"], newCategory }),
//   //         );
//   //         const expectedLocalStorageValues = {
//   //           a: {
//   //             categoryTree: {
//   //               data: null,
//   //               isLoading: false,
//   //               error: null,
//   //             },
//   //           },
//   //           b: {
//   //             categoryTree: {
//   //               data: null,
//   //               isLoading: true,
//   //               error: null,
//   //             },
//   //           },
//   //           c: {
//   //             categoryTree: {
//   //               data: entireCategoriesTreeAfterAdd,
//   //               isLoading: false,
//   //               error: null,
//   //             },
//   //           },
//   //         };
//   //         helpers
//   //           .expectObservable(LSTreeState$)
//   //           .toBe("(abc)", expectedLocalStorageValues);
//   //     });
//   //   });
// });
