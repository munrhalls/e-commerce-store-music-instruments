import { provideMockActions } from "@ngrx/effects/testing";
import { TestBed } from "@angular/core/testing";
import { Subject, of, throwError } from "rxjs";
import { CategoryTreeEffects } from "../../category-tree.effects";
import { CategoriesService } from "../../../../categories.service";
import { fakeAsync, tick } from "@angular/core/testing";
import { Action } from "@ngrx/store";
// import { ErrorModel } from "../../../../../../@core/error-handler/error.model";
import { ServerConnectionError } from "../../../../../../@core/error-handler/errors/serverConnectionError";

describe("All effects needed for CREATE, READ, UPDATE, MOVE DOWN, MOVE UP, DELETE, should exist (6)", () => {
  let categoryTreeEffects: CategoryTreeEffects;
  let mockCategoriesService;

  beforeEach(() => {
    mockCategoriesService = {
      fetchCategoryTree: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        CategoryTreeEffects,
        provideMockActions(() => new Subject<Action>()),
        { provide: CategoriesService, useValue: mockCategoriesService },
      ],
    });
    categoryTreeEffects = TestBed.inject(CategoryTreeEffects);
  });

  it("api load category tree effect should exist", () => {
    expect(categoryTreeEffects.apiLoadCategoryTree$).toBeDefined();
  });
  it("api create new category effect should exist", () => {
    expect(categoryTreeEffects.apiCreateNewCategory$).toBeDefined();
  });
  it("api update category name effect should exist", () => {
    expect(categoryTreeEffects.apiUpdateCategoryName$).toBeDefined();
  });
  it("api move down effect should exist", () => {
    expect(categoryTreeEffects.apiMoveDown$).toBeDefined();
  });
  it("api move up effect should exist", () => {
    expect(categoryTreeEffects.apiMoveUp$).toBeDefined();
  });
  it("api delete category effect should exist", () => {
    expect(categoryTreeEffects.apiDeleteCategory$).toBeDefined();
  });
});
