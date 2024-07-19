import { TestBed } from "@angular/core/testing";
import { StoreModule, Store } from "@ngrx/store";
import * as fromCategories from "./index";
import * as CategoriesActions from "./categories.actions";
import { CategoriesEffects } from "./categories.effects";
import { CategoriesService } from "../../pages/categories/categories.service";
import { of } from "rxjs";
import { mockCategoryNode } from "./categories.mock-data.spec";
import { EffectsModule } from "@ngrx/effects";

const mockCategoriesService = {
  getCategoryNode$: () => of(mockCategoryNode),
};

describe("NGRX Redux should initialize state with categoryNode", () => {
  let store: Store<fromCategories.CategoriesState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ categories: fromCategories.categoriesReducer }),
        EffectsModule.forRoot([CategoriesEffects]),
      ],
      providers: [
        { provide: CategoriesService, useValue: mockCategoriesService },
      ],
    });

    store = TestBed.inject(Store);
  });

  describe("LOCAL STORAGE LOGIC", () => {
    it("Category Page opened, should dispatch action to load categoryNode data from Local Storage", () => {});
    it("Success: categories component should access categoryNode from store", () => {});
    it("Error: should dispatch action to fetch categoryNode data from API", () => {});
  });

  describe("FETCH FROM SERVER LOGIC", () => {
    it("Success: categories component should access categoryNode from store", () => {});
    it("Success: categories component should save categoryNode to LocalStorage", () => {});
    it("Error:", () => {});
  });
});
