import { provideMockActions } from "@ngrx/effects/testing";
import { TestBed } from "@angular/core/testing";
import { Subject, of } from "rxjs";
import { CategoryTreeEffects } from "../../category-tree.effects";
import { CategoriesService } from "../../../../categories.service";
import { Action } from "@ngrx/store";

describe("All effects needed for CREATE, READ, UPDATE, MOVE DOWN, MOVE UP, DELETE, should exist (6)", () => {
  let categoryTreeEffects: CategoryTreeEffects;
  let actions$: Subject<Action>;
  let mockCategoriesService: jest.Mocked<CategoriesService>;

  beforeEach(() => {
    actions$ = new Subject<Action>();
    mockCategoriesService = {} as unknown as jest.Mocked<CategoriesService>;

    TestBed.configureTestingModule({
      providers: [
        CategoryTreeEffects,
        provideMockActions(() => actions$),
        { provide: CategoriesService, useValue: mockCategoriesService },
      ],
    });

    categoryTreeEffects = TestBed.inject(CategoryTreeEffects);
  });

  it("api load category tree effect should exist", () => {
    expect(categoryTreeEffects.apiLoadCategoryTree$).toBeDefined();
  });
  it("api create new category effect should exist", () => {
    expect(categoryTreeEffects.apiAddCategoryToTarget$).toBeDefined();
  });
  it("api update category name effect should exist", () => {
    expect(categoryTreeEffects.apiUpdateTargetName$).toBeDefined();
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
