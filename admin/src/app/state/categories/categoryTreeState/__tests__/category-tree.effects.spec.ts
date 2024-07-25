import { CategoryTreeEffects } from "../category-tree.effects";
import { provideMockActions } from "@ngrx/effects/testing";
import { Observable, of } from "rxjs";
import { TestScheduler } from "rxjs/testing";
import { categoryTreeActions } from "../category-tree.actions";
import { TestBed } from "@angular/core/testing";

describe("CategoryTreeEffects", () => {
  let actions$: Observable<any>;
  let effects: CategoryTreeEffects;
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    TestBed.configureTestingModule({
      providers: [CategoryTreeEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(CategoryTreeEffects);
  });

  it("should handle loading category tree from local storage", () => {
    testScheduler.run(({ hot, expectObservable }) => {
      const action = categoryTreeActions.loadingFromLs();
      const completion = categoryTreeActions.loadingFromLsSuccess({
        categoryTree: {} as any,
      });

      actions$ = hot("-a", { a: action });
      const expected = "-b";

      expectObservable(effects.loadCategoriesFromLocalStorage$).toBe(expected, {
        b: completion,
      });
    });
  });
});
