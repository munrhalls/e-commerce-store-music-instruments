import { provideMockActions } from "@ngrx/effects/testing";
import { TestBed } from "@angular/core/testing";
import { Subject, of, throwError } from "rxjs";
import { CategoryTreeEffects } from "../../category-tree.effects";
import { CategoriesService } from "../../../../categories.service";
import { fakeAsync, tick } from "@angular/core/testing";
import { Action } from "@ngrx/store";
// import { ErrorModel } from "../../../../../../@core/error-handler/error.model";
import { ServerConnectionError } from "../../../../../../@core/error-handler/errors/serverConnectionError";

describe("CategoryTreeEffects", () => {
  let actions$ = new Subject<Action>();
  let effects: CategoryTreeEffects;
  let mockCategoriesService;

  beforeEach(() => {
    mockCategoriesService = {
      fetchCategoryTree: jest.fn().mockReturnValue(
        of({
          id: "1",
          name: "Category 1",
          pathIds: ["1"],
          children: [],
        }),
      ),
    };

    TestBed.configureTestingModule({
      providers: [
        CategoryTreeEffects,
        provideMockActions(() => actions$),
        { provide: CategoriesService, useValue: mockCategoriesService },
      ],
    });

    effects = TestBed.inject(CategoryTreeEffects);
  });

  it("should NOT be triggered by irrelevant /typo action", fakeAsync(() => {
    let emission: any;

    effects.apiLoadCategoryTree$.subscribe(() => {
      emission = "triggered";
    });

    actions$.next({ type: "[Category Tree] API Loadd" });
    tick();
    expect(emission).toBeUndefined();
  }));

  it("should be triggered by the API Load action", fakeAsync(() => {
    let emission = null;

    effects.apiLoadCategoryTree$.subscribe((action) => {
      emission = "triggered";
      expect(mockCategoriesService.fetchCategoryTree).toHaveBeenCalled();
    });

    actions$.next({ type: "[Category Tree] API Load" });
    tick();
    expect(emission).toEqual("triggered");
  }));

  it("should call categoriesService.fetchCategoryTree", () => {
    let called = false;
    effects.apiLoadCategoryTree$.subscribe(() => {
      expect(mockCategoriesService.fetchCategoryTree).toHaveBeenCalled();
      called = true;
    });
    actions$.next({ type: "[Category Tree] API Load" });
    expect(called).toBe(true);
  });
  it("should dispatch the API Load Success action with the category tree payload if service api returned 200", () => {
    let testedResultAction = null;
    const expectedResultAction = {
      categoryTree: {
        id: "1",
        name: "Category 1",
        pathIds: ["1"],
        children: [],
      },
      type: "[Category Tree] API Load Success",
    };

    effects.apiLoadCategoryTree$.subscribe((resultAction) => {
      testedResultAction = resultAction;
    });
    actions$.next({ type: "[Category Tree] API Load" });

    expect(testedResultAction).toEqual(expectedResultAction);
  });
  it("should dispatch the API Load Error action with the error payload", () => {
    mockCategoriesService.fetchCategoryTree.mockReturnValueOnce(
      throwError(new ServerConnectionError()),
    );

    let testedResultAction = null;
    const expectedResultAction = {
      error: new ServerConnectionError(),
      type: "[Category Tree] API Load Error",
    };

    effects.apiLoadCategoryTree$.subscribe((resultAction) => {
      testedResultAction = resultAction;
    });
    actions$.next({ type: "[Category Tree] API Load" });
    console.log(testedResultAction, "TESTED RESULT ACTION ON ERROR");

    expect(testedResultAction).toEqual(expectedResultAction);
  });
});
