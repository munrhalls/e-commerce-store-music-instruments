import { provideMockActions } from "@ngrx/effects/testing";
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { CategoryTreeEffects } from "./../../category-tree.effects";
import { CategoriesService } from "./../../../../categories.service";

describe("CategoryTreeEffects", () => {
  let actions$ = of({ type: "[Category Tree] API Load" });
  let effects: CategoryTreeEffects;
  let mockCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CategoryTreeEffects,
        provideMockActions(() => actions$),
        { provide: CategoriesService, useValue: mockCategoriesService },
      ],
    });

    effects = TestBed.inject(CategoryTreeEffects);

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
  });

  it("should be triggered by the API Load action", () => {
    effects.apiLoadCategoryTree$.subscribe(() => {
      expect(mockCategoriesService.fetchCategoryTree).toHaveBeenCalled();
    });
  });
});

// import { provideMockActions } from "@ngrx/effects/testing";
// import { TestBed } from "@angular/core/testing";
// import { Observable, of } from "rxjs";
// import { Action } from "@ngrx/store";
// import { CategoryTreeEffects } from "./../../category-tree.effects";
// import { CategoriesService } from "./../../../../categories.service";

// describe("Category tree effects", () => {
//   let actions$ = new Observable<Action>();
//   let effects$;
//   let mockCategoriesService = {
//     fetchCategoryTree: jest.fn(),
//   } as unknown as CategoriesService;
//   let mockCategoryTree = {
//     id: "1",
//     name: "Category 1",
//     pathIds: ["1"],
//     children: [],
//   };

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         provideMockActions(() => actions$),
//         {
//           provide: CategoryTreeEffects,
//           useFactory: () =>
//             new CategoryTreeEffects(actions$, mockCategoriesService),
//         },
//       ],
//     });
//     effects$ = TestBed.inject(CategoryTreeEffects);
//     jest
//       .spyOn(mockCategoriesService, "fetchCategoryTree")
//       .mockReturnValue(of(mockCategoryTree));
//   });
//   it("should be triggered by the API Load action", () => {
//     actions$ = of({ type: "[Category Tree] API Load" });

//     effects$.apiLoadCategoryTree$.subscribe(() => {
//       expect(mockCategoriesService.fetchCategoryTree).toHaveBeenCalled();
//     });
//   });
//   it("should call categoriesService.fetchCategoryTree", () => {});
//   it("should dispatch the API Load Success action with the category tree", () => {});
//   it("should dispatch the API Load Error action with the error", () => {});
// });
