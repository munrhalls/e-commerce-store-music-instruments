import * as categoryTreeActions from "../../category-tree.actions";
import { Action } from "@ngrx/store";
import { CategoriesService } from "../../../../categories.service";
import { CategoryTree } from "../../../../categories.model";
import { ServerConnectionError } from "../../../../../../@core/error-handler/errors/serverConnectionError";
import { selectCategoryTreeState } from "../../category-tree.selectors";
import { select } from "@ngrx/store";
import { store, effects } from "./setup";
import { selectCategories } from "../../../categories.selector";
import { CategoryTreeState } from "../../category-tree.reducer";
import { setupTestBed } from "./setup";
import { of, ReplaySubject, throwError } from "rxjs";
import { TestScheduler } from "rxjs/testing";
import { TestBed } from "@angular/core/testing";
import { CategoriesState } from "../../../categories.reducer";

let mockCategoriesService: CategoriesService;
let testScheduler: TestScheduler;

afterEach(() => {
  TestBed.resetTestingModule();
  mockCategoriesService;
  testScheduler;
});

describe("CREATE", () => {
  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it("on add with api success response, state transitions 'initial -> loading -> api response' with expected marble", () => {
    // arrange
    const initialData = {
      id: "root",
      name: "root",
      pathIds: ["root"],
      children: [],
    };

    const apiSuccessRes = {
      id: "root",
      name: "root",
      pathIds: ["root"],
      children: [
        {
          id: "mock",
          name: "mock",
          pathIds: ["mock"],
          children: [],
        },
      ],
    };

    mockCategoriesService = {
      addCategory: jest.fn(() => of(apiSuccessRes)),
    } as unknown as CategoriesService;

    setupTestBed(mockCategoriesService, "noLocalStorageSync", {
      data: initialData,
      isLoading: false,
      error: null,
    });

    // act
    testScheduler.run((helpers) => {
      const state$ = store.pipe(select(selectCategoryTreeState));
      const replayState$ = new ReplaySubject<CategoryTreeState>();
      state$.subscribe((state) => {
        replayState$.next(state);
      });

      store.dispatch(
        categoryTreeActions.apiAdd({
          targetPathIds: ["root"],
          newCategory: {
            id: "mock",
            name: "mock",
            pathIds: ["mock"],
            children: [],
          },
        }),
      );

      // assert
      helpers.expectObservable(replayState$).toBe("(abc)", {
        a: {
          data: initialData,
          isLoading: false,
          error: null,
        },
        b: {
          data: initialData,
          isLoading: true,
          error: null,
        },
        c: {
          data: apiSuccessRes,
          isLoading: false,
          error: null,
        },
      });
    });
  });

  it("on add with api error response, state transitions 'initial -> loading -> api response' with expected marble", () => {
    // arrange
    const initialData = {
      id: "root",
      name: "root",
      pathIds: ["root"],
      children: [],
    };

    mockCategoriesService = {
      addCategory: jest.fn(() => throwError(() => new Error("API error"))),
    } as unknown as CategoriesService;

    setupTestBed(mockCategoriesService, "noLocalStorageSync", {
      data: initialData,
      isLoading: false,
      error: null,
    });

    // act
    testScheduler.run((helpers) => {
      const state$ = store.pipe(select(selectCategoryTreeState));
      const replayState$ = new ReplaySubject<CategoryTreeState>();
      state$.subscribe((state) => {
        replayState$.next(state);
      });

      store.dispatch(
        categoryTreeActions.apiAdd({
          targetPathIds: ["root"],
          newCategory: {
            id: "mock",
            name: "mock",
            pathIds: ["mock"],
            children: [],
          },
        }),
      );

      // assert
      helpers.expectObservable(replayState$).toBe("(abc)", {
        a: {
          data: initialData,
          isLoading: false,
          error: null,
        },
        b: {
          data: initialData,
          isLoading: true,
          error: null,
        },
        c: {
          data: initialData,
          isLoading: false,
          error: "API error",
        },
      });
    });
  });
});
