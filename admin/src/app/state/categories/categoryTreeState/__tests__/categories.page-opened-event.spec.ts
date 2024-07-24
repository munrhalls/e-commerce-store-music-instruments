import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { first } from "rxjs/operators";

import { CategoriesService } from "../../../../pages/categories/categories.service";
import { StoreModule, Store } from "@ngrx/store";
import { categoryTreeActions } from "../category-tree.actions";
import { categoryTreeReducer } from "../category-tree.reducer";
import { EffectsModule } from "@ngrx/effects";
import { CategoryTreeEffects } from "../category-tree.effects";
import { Actions, ofType } from "@ngrx/effects";
import { exhaustMap, concatMap, take } from "rxjs/operators";
import { fakeAsync, tick, flush } from "@angular/core/testing";
import { CategoryTree } from "../../../../pages/categories/categories.model";
import { selectCategoryTree } from "../../categories.selector";
import { categoriesReducer } from "../../categories.reducer";

const mockCategoriesService = {
  getCategoryTree: jest.fn(() =>
    of({ id: "root", name: "Root", pathIds: [], children: [] }),
  ),
};

const mockCategoryTree: CategoryTree = {
  id: "root",
  name: "Root",
  pathIds: [],
  children: [],
};

let store: Store;
let categoryTreeEffects: CategoryTreeEffects;
let actions$: Actions;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot({
        categories: categoriesReducer,
      }),
      EffectsModule.forRoot(CategoryTreeEffects),
    ],
    providers: [
      {
        provide: CategoriesService,
        useValue: mockCategoriesService,
      },
    ],
  });

  store = TestBed.inject(Store);
  actions$ = TestBed.inject(Actions);
  categoryTreeEffects = TestBed.inject(CategoryTreeEffects);
});

describe("Attempting to load category tree from local is handled properly", () => {
  it("Store can dispatch new load from local storage action", () => {
    expect(categoryTreeActions.loadingFromLs).toBeDefined();
  });

  it("If loading from local storage succeeded, effect should dispatch new success action with categoryTree props", fakeAsync(() => {
    // ARRANGE
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn().mockImplementation((key) => {
          if (key === "categoryTree") {
            return JSON.stringify(mockCategoryTree);
          }
        }),
      },
      writable: true,
    });

    let newAction;
    const loadFromLSAction = categoryTreeActions.loadingFromLs;
    const expectedSuccessAction = categoryTreeActions.loadingFromLsSuccess;

    actions$
      .pipe(ofType(expectedSuccessAction))
      .subscribe((action$) => (newAction = action$));

    // ACT
    tick();
    store.dispatch(loadFromLSAction());
    tick();

    // ASSERT
    expect(newAction).toBeDefined();
    expect(newAction).toEqual(
      expectedSuccessAction({ categoryTree: mockCategoryTree }),
    );

    flush();
  }));

  it("Successful load from local storage should result in new store state that contains loaded categoryTree", fakeAsync(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn().mockImplementation((key) => {
          if (key === "categoryTree") {
            return JSON.stringify(mockCategoryTree);
          }
        }),
      },
      writable: true,
    });

    let categoryTree$: CategoryTree = null;

    expect(categoryTree$).toBeNull();

    store.select(selectCategoryTree).subscribe((categoryTree) => {
      console.dir(categoryTree);
      expect(mockCategoryTree).toEqual({ categoryTree });
      categoryTree$ = categoryTree;
    });

    store.dispatch(categoryTreeActions.loadingFromLs());
    tick();

    expect(categoryTree$).toBeDefined();
    expect(categoryTree$).toEqual(mockCategoryTree);
  }));
  it("if loading from local storage failed, effect should dispatch failure action", fakeAsync(() => {
    // ARRANGE
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn().mockImplementation((key) => {
          return undefined;
        }),
      },
      writable: true,
    });

    let newAction;
    const action = categoryTreeActions.loadingFromLs;
    const expectedFailureAction = categoryTreeActions.loadingFromLsFailure;

    actions$.pipe(ofType(expectedFailureAction)).subscribe((action$) => {
      newAction = action$;
    });

    // ACT
    tick();
    store.dispatch(action());

    // ASSERT
    //should fail
    expect(newAction).toEqual(expectedFailureAction());

    flush();
  }));
});

describe("If local storage is empty, attempting to load category tree from API should be handled properly", () => {
  // Failure to load from local storage, should dispatch new call to API action
  // If loading from API succeeded, effect should dispatch new API load success action
  // Successful load from API, should result in new state that contains API loaded categoryTree
  // Successful load from API, should also result in saving the API loaded category tree to local storage
});

describe("If loading from API fails, error state should be handled properly", () => {
  // If loading from API failed, effect should dispatch new API load failure action
  // On API load failure, state should initialize empty category tree
});
