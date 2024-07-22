import { TestBed } from "@angular/core/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { Observable } from "rxjs";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { Store } from "@ngrx/store";

import { categoryTreeReducer } from "./../category-tree.reducer";
import { CategoryTreeEffects } from "./../category-tree.effects";
import { selectCategoryTreeState } from "./../category-tree.selectors";
import { categoryTreeActions } from "./../category-tree.actions";

jest.mock("../categories.service");
// import { CategoriesService } from "../../../../pages/categories/categories.service";

describe("Category Tree State Management Tests", () => {
  let actions$: Observable<any>;
  let store: Store;
  let effects: CategoryTreeEffects;
  let categoriesService: jest.Mocked<CategoriesService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          categoryTree: categoryTreeReducer,
        }),
        EffectsModule.forRoot([CategoryTreeEffects]),
      ],
      providers: [
        provideMockActions(() => actions$),
        CategoryTreeEffects,
        CategoriesService,
      ],
    });

    store = TestBed.inject(Store);
    effects = TestBed.inject(CategoryTreeEffects);
    categoriesService = TestBed.inject(
      CategoriesService,
    ) as jest.Mocked<CategoriesService>;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should be created", () => {
    expect(effects).toBeTruthy();
  });

  // Add your tests here, using real actions, selectors, and effects
});
