import * as categoryTreeActions from "../../category-tree.actions";
import { Action } from "@ngrx/store";
import { CategoriesService } from "../../../../categories.service";
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

let mockCategoriesService: CategoriesService;
let testScheduler: TestScheduler;
let initialTreeState: CategoryTreeState;

afterEach(() => {
  TestBed.resetTestingModule();
  mockCategoriesService;
  testScheduler;
});

beforeEach(() => {
  localStorage.clear();
  mockCategoriesService;
  testScheduler;
  initialTreeState;

  testScheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  });

  initialTreeState = {
    data: {
      id: "root",
      name: "root category",
      pathIds: ["root"],
      children: [
        {
          id: "mock",
          name: "mock category",
          pathIds: ["mock"],
          children: [],
        },
      ],
    },
    isLoading: false,
    error: null,
  };
});

describe("STATE FROM LS", () => {
  mockCategoriesService = {} as unknown as CategoriesService;

  it("Local storage state should equal state", () => {
    // arrange
    setupTestBed(mockCategoriesService, "withLocalStorageSync");

    // act
    testScheduler.run((helpers) => {
      const state$ = store.pipe(select(selectCategoryTreeState));
      const LS = localStorage.getItem("categories");
      const parsedLS = JSON.parse(LS);

      // assert
      helpers.expectObservable(state$).toBe("a", {
        a: parsedLS.categoryTreeState,
      });
    });
  });

  it("LS tree data should be exact match to state data", () => {
    // arrange
    setupTestBed(
      mockCategoriesService,
      "withLocalStorageSync",
      initialTreeState,
    );

    // act
    const state$ = store.pipe(select(selectCategoryTreeState));
    const LS = localStorage.getItem("categories");
    const parsedLS = JSON.parse(LS);

    // assert
    expect(parsedLS.categoryTreeState.data).toEqual(initialTreeState.data);
  });

  it("If tree data is null, LS should have null tree data field", () => {
    // arrange
    setupTestBed(mockCategoriesService, "withLocalStorageSync");

    // act
    const state$ = store.pipe(select(selectCategoryTreeState));
    const LS = localStorage.getItem("categories");
    const parsedLS = JSON.parse(LS);

    // assert
    expect(parsedLS.categoryTreeState.data).toEqual(null);
  });

  it("If tree data is null, LS should remain exact state match", () => {
    //assert
    setupTestBed(mockCategoriesService, "withLocalStorageSync");

    //act
    testScheduler.run((helpers) => {
      const state$ = store.pipe(select(selectCategoryTreeState));
      const LS = localStorage.getItem("categories");
      const parsedLS = JSON.parse(LS);

      //assert
      expect(parsedLS.categoryTreeState.data).toEqual(null);
      helpers.expectObservable(state$).toBe("a", {
        a: parsedLS.categoryTreeState,
      });
    });
  });
});
