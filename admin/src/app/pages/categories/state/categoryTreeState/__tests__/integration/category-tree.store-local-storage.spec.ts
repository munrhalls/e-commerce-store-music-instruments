import * as categoryTreeActions from "../../category-tree.actions";
import { Action } from "@ngrx/store";
import { CategoriesService } from "../../../../categories.service";
import { ServerConnectionError } from "../../../../../../@core/error-handler/errors/serverConnectionError";

import { selectCategoryTree } from "../../category-tree.selectors";
import { select } from "@ngrx/store";

import { store, effects } from "./setup";
import { selectCategories } from "../../../categories.selector";

import { setupTestBed } from "./setup";

import { of, Observable, Subject, ReplaySubject, throwError } from "rxjs";
import { TestScheduler } from "rxjs/testing";
import { TestBed } from "@angular/core/testing";

let mockCategoriesService: CategoriesService;
let testScheduler: TestScheduler;

afterEach(() => {
  localStorage.setItem("categories", null);
  TestBed.resetTestingModule();
});

beforeEach(() => {
  testScheduler = new TestScheduler((actual, expected) => {
    console.log("actual...", actual);
    console.log("expected...", expected);
    expect(actual).toEqual(expected);
  });
});

describe("LOCAL STORAGE IS MANAGED BY NGRX META-REDUCER", () => {
  // it("local storage should contain exact replica of categories state slice", () => {
  //   mockCategoriesService = {} as unknown as CategoriesService;
  //   setupTestBed(mockCategoriesService);

  //   testScheduler.run((helpers) => {
  //     // ARRANGE
  //     const actualState$ = store.pipe(select(selectCategories));
  //     // ACT
  //     const localStorageState = localStorage.getItem("categories");

  //     // ASSERT
  //     expect(localStorageState).not.toBeNull();

  //     const parsedLocalStorageState = JSON.parse(localStorageState);
  //     helpers.expectObservable(actualState$).toBe("a", {
  //       a: parsedLocalStorageState,
  //     });
  //   });
  // });
  // it("local storage replica should contain replica of categoryTree", () => {
  //   mockCategoriesService = {} as unknown as CategoriesService;
  //   setupTestBed(mockCategoriesService);

  //   testScheduler.run((helpers) => {
  //     // ARRANGE
  //     const actualState$ = store.pipe(select(selectCategoryTree));

  //     // ACT
  //     const localStorageState = localStorage.getItem("categories");

  //     // ASSERT
  //     expect(localStorageState).not.toBeNull();

  //     const parsedLocalStorageState = JSON.parse(localStorageState);
  //     helpers.expectObservable(actualState$).toBe("a", {
  //       a: parsedLocalStorageState.categoryTree,
  //     });
  //   });
  // });

  it("local storage state replica should reflect an update in categoryTree", () => {
    // ARRANGE
    testScheduler.run((helpers) => {
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

      const LSTreeState$ = new Subject();
      const actualTreeState$ = store.pipe(select(selectCategoryTree));
      actualTreeState$.subscribe((state) => {
        const localStorageState = JSON.parse(
          localStorage.getItem("categories"),
        );
        const localStorageStateTree = localStorageState.categoryTree;
        console.log("localStorageStateTree...", localStorageStateTree);
        LSTreeState$.next(of(localStorageStateTree));
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
    testScheduler.flush();
  });
});
