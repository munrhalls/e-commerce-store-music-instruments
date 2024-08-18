import * as categoryTreeActions from "../../category-tree.actions";
import { Actions } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { CategoryTreeEffects } from "../../category-tree.effects";
import { EffectsModule } from "@ngrx/effects";
import { CategoriesService } from "../../../../categories.service";
import { CategoryTree } from "../../../../categories.model";
import { ServerConnectionError } from "../../../../../../@core/error-handler/errors/serverConnectionError";

import {
  categoryTreeReducer,
  State,
  initialState,
} from "../../category-tree.reducer";
import { categoriesReducer } from "../../../categories.reducer";

import { Store, StoreModule } from "@ngrx/store";

import { fakeAsync, tick, TestBed, flush } from "@angular/core/testing";

import { selectCategoryTree } from "../../category-tree.selectors";
import { select } from "@ngrx/store";

import { of, pipe, Observable, throwError } from "rxjs";
import { take, mergeMap, skip } from "rxjs/operators";
import { flushMicrotasks } from "zone.js/testing";
import { TestScheduler } from "rxjs/testing";

describe("CREATE", () => {
  afterEach(() => {
    TestBed.resetTestingModule();
  });

  let store: Store;
  let effects: CategoryTreeEffects;
  let mockCategoriesService: CategoriesService;
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      console.log("actual...", actual);
      console.log("expected...", expected);
      expect(actual).toEqual(expected);
    });
  });

  const setupTestBed = () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          categories: categoriesReducer,
        }),
        StoreModule.forFeature("categoryTree", categoryTreeReducer),
        EffectsModule.forRoot(),
        EffectsModule.forFeature([CategoryTreeEffects]),
      ],
      providers: [
        Store,
        {
          provide: CategoriesService,
          useValue: mockCategoriesService,
        },
        CategoryTreeEffects,
      ],
    });
    store = TestBed.inject(Store);
    effects = TestBed.inject(CategoryTreeEffects);
  };

  // it("on add action dispatch: state sets loading to true, then false upon completion", () => {
  //   const newCategory = {
  //     id: "mock",
  //     name: "mock category",
  //     pathIds: ["mock"],
  //     children: [],
  //   };
  //   const action = categoryTreeActions.apiAdd({
  //     targetPathIds: ["mock"],
  //     newCategory,
  //   });

  //   mockCategoriesService = {
  //     addCategory: jest.fn(() => of(null)),
  //   } as unknown as CategoriesService;
  //   setupTestBed();

  //   testScheduler.run((helpers) => {
  //     // ARRANGE
  //     const actualState$ = store.pipe(select(selectCategoryTree));
  //     // ACT
  //     store.dispatch(action);
  //     // ASSERT
  //     helpers.expectObservable(actualState$).toBe("(ab)", {
  //       a: { categoryTree: { data: null, isLoading: true, error: null } },
  //       b: { categoryTree: { data: null, isLoading: false, error: null } },
  //     });
  //   });
  // });

  // it("on add action dispatch and api success: add effect returns success action", () => {
  //   const newCategory = {
  //     id: "1",
  //     name: "mock category added",
  //     pathIds: ["1"],
  //     children: [],
  //   };
  //   const newEntireCategoriesTree = {
  //     id: "root",
  //     name: "root",
  //     pathIds: ["root"],
  //     children: [newCategory],
  //   };

  //   const action = categoryTreeActions.apiAdd({
  //     targetPathIds: ["root"],
  //     newCategory,
  //   });
  //   const expectedAction = categoryTreeActions.apiAddSuccess({
  //     categoryTree: newEntireCategoriesTree,
  //   });

  //   mockCategoriesService = {
  //     addCategory: jest.fn(() => of(newEntireCategoriesTree)),
  //   } as unknown as CategoriesService;
  //   setupTestBed();

  //   // ARRANGE
  //   let actualAction: Action;
  //   effects.apiAdd$.subscribe((result) => {
  //     actualAction = expectedAction;
  //   });

  //   // ACT
  //   store.dispatch(action);

  //   // ASSERT
  //   expect(actualAction).toEqual(expectedAction);
  // });
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
      error: new ServerConnectionError(),
    });

    mockCategoriesService = {
      addCategory: jest.fn(() => {
        return throwError(() => new Error("error asdfghjkl"));
      }),
    } as unknown as CategoriesService;
    setupTestBed();

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
