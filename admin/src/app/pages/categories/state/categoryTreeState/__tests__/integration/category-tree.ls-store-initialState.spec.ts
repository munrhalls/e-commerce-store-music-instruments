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

describe("LS-STORE SYNC: INITIAL STATE", () => {
  mockCategoriesService = {} as unknown as CategoriesService;

  it("LS state copy should contain categoryTreeState", () => {
    setupTestBed(mockCategoriesService);

    testScheduler.run((helpers) => {
      // ARRANGE
      const state$ = store.pipe(select(selectCategoryTreeState));
      // ACT
      const LS = localStorage.getItem("categories");
      // ASSERT
      expect(LS).not.toBeNull();

      const parsedLS = JSON.parse(LS);
      helpers.expectObservable(state$).toBe("a", {
        a: parsedLS.categoryTreeState,
      });
    });
  });

  it("LS copy of tree data should be exact match to state", () => {
    setupTestBed(mockCategoriesService, initialTreeState);

    testScheduler.run((helpers) => {
      // ARRANGE
      const state$ = store.pipe(select(selectCategoryTreeState));

      // ACT
      const LS = localStorage.getItem("categories");
      const parsedLS = JSON.parse(LS);

      // ASSERT

      expect(parsedLS.categoryTreeState.data).toEqual(initialTreeState.data);

      helpers.expectObservable(state$).toBe("a", {
        a: parsedLS.categoryTreeState,
      });
    });
  });
});
