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

describe("Categories Reducer", () => {
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

  it("should trigger fetching categoryNode tree, on successful fetch state should hold categoryNode", () => {
    const effects = TestBed.inject(CategoriesEffects);
    const store = TestBed.inject(Store);

    store.select(fromCategories.selectCategoryNode).subscribe((state) => {
      expect(state).toEqual(null);
    });

    effects.loadCategories$.subscribe();
    store.dispatch(CategoriesActions.loadCategoryNode());

    store.select(fromCategories.selectCategoryNode).subscribe((state) => {
      expect(state).toEqual(mockCategoryNode);
      console.log("fromCategories.selectCategoryNode: ", state);
    });
  });
});
