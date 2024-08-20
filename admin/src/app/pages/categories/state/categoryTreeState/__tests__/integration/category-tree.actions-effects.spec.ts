import * as categoryTreeActions from "../../category-tree.actions";
import { Action } from "@ngrx/store";
import { CategoriesService } from "../../../../categories.service";
import { ServerConnectionError } from "../../../../../../@core/error-handler/errors/serverConnectionError";
import { selectCategoryTreeState } from "../../category-tree.selectors";
import { select } from "@ngrx/store";
import { store, effects } from "./setup";
import { setupTestBed } from "./setup";
import { of, throwError } from "rxjs";
import { TestScheduler } from "rxjs/testing";
import { TestBed } from "@angular/core/testing";

let mockCategoriesService: CategoriesService;
let testScheduler: TestScheduler;

afterEach(() => {
  TestBed.resetTestingModule();
});

beforeEach(() => {
  testScheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  });
});

describe("CREATE: API EFFECT'S RETURN ACTION", () => {
  it("on add action dispatch and api success: add effect returns success action", () => {
    const newCategory = {
      id: "1",
      name: "mock category added",
      pathIds: ["1"],
      children: [],
    };
    const newEntireCategoriesTree = {
      id: "root",
      name: "root",
      pathIds: ["root"],
      children: [newCategory],
    };

    const action = categoryTreeActions.apiAdd({
      targetPathIds: ["root"],
      newCategory,
    });
    const expectedAction = categoryTreeActions.apiAddSuccess({
      categoryTree: newEntireCategoriesTree,
    });

    mockCategoriesService = {
      addCategory: jest.fn(() => of(newEntireCategoriesTree)),
    } as unknown as CategoriesService;
    setupTestBed(mockCategoriesService);
    // ARRANGE
    let actualAction: Action;
    effects.apiAdd$.subscribe((result) => {
      actualAction = expectedAction;
    });

    // ACT
    store.dispatch(action);

    // ASSERT
    expect(actualAction).toEqual(expectedAction);
  });
  it("on add action dispatch and api error: add effect returns error action", () => {
    const newCategory = {
      id: "1",
      name: "mock category added",
      pathIds: ["1"],
      children: [],
    };

    const action = categoryTreeActions.apiAdd({
      targetPathIds: ["root"],
      newCategory,
    });
    const expectedAction = categoryTreeActions.apiAddError({
      error: "API error",
    });

    mockCategoriesService = {
      addCategory: jest.fn(() => {
        return throwError(() => new Error("error asdfghjkl"));
      }),
    } as unknown as CategoriesService;
    setupTestBed(mockCategoriesService);
    // ARRANGE
    let actualAction: Action;
    effects.apiAdd$.subscribe((result) => {
      actualAction = result;
    });

    // ACT
    store.dispatch(action);

    // ASSERT
    expect(actualAction).toEqual(expectedAction);
  });
});
