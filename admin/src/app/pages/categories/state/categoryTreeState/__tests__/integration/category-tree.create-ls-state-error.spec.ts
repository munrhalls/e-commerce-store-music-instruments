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
    localStorage.clear();

    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it("on success add, LS state should exactly shadow state transitions", () => {
    // arrange
    const initialData = {
      id: "root",
      name: "root",
      pathIds: ["root"],
      children: [],
    };

    mockCategoriesService = {
      addCategory: jest.fn(() => throwError("API error")),
    } as unknown as CategoriesService;

    setupTestBed(mockCategoriesService, {
      data: initialData,
      isLoading: false,
      error: null,
    });

    // act
    testScheduler.run((helpers) => {
      const state$ = store.pipe(select(selectCategoryTreeState));
      const LS$ = new ReplaySubject<CategoriesState>();

      state$.subscribe((state) => {
        const LS = localStorage.getItem("categories");
        const LSparsed = JSON.parse(LS);
        LS$.next(LSparsed.categoryTreeState);
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
      helpers.expectObservable(LS$).toBe("(abc)", {
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
