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

const localStorageServiceMock = {
  loadCategoryTree: jest.fn().mockReturnValue({
    /* ...mock data */
  }), // Added mock data
};
TestBed.overrideProvider(localStorageServiceMock, {
  // Changed here
  useValue: localStorageServiceMock,
});

let store: Store;
let categoryTreeEffects: CategoryTreeEffects;
let actions$: Actions;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot({ categoryTree: categoryTreeReducer }),
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

describe("Categories Page Opened Event is handled properly", () => {
  it("dispatching loadingFromLocalStorage action, should cause effect to return new action that confirms success or failure", fakeAsync(() => {
    // ARRANGE
    let newAction;
    const action = categoryTreeActions.loadingFromLocalStorage;
    const actionFailure = categoryTreeActions.loadingFromLocalStorageFailure;
    const actionSuccess = categoryTreeActions.loadingFromLocalStorageSuccess;

    actions$.pipe(ofType(actionFailure)).subscribe((action$) => {
      newAction = action$;
    });

    // ACT
    tick();
    store.dispatch(action());

    // ASSERT
    expect(newAction).toEqual(
      actionFailure() || actionSuccess({ categoryTree: mockCategoryTree }),
    );

    flush();
  }));
});
