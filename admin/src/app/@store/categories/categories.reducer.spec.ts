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

  it("should load category node from local storage and update state", () => {
    spyOn(localStorage, "getItem").and.returnValue(null);
    store.dispatch(CategoriesActions.loadCategoryNodeFromLocalStorage());
    store.select(fromCategories.selectCategoryNode).subscribe((state) => {
      expect(state).toBeNull();
    });
  });

  it("should dispatch loadCategoryNode action if local storage is empty", () => {
    spyOn(localStorage, "getItem").and.returnValue(null);
    const dispatchSpy = jest.spyOn(store, "dispatch");
    store.dispatch(CategoriesActions.loadCategoryNodeFromLocalStorage());
    expect(dispatchSpy).toHaveBeenCalledWith(
      CategoriesActions.loadCategoryNode(),
    );
  });

  it("should dispatch saveCategoryNodeToLocalStorage action on loadCategoryNodeSuccess", () => {
    spyOn(localStorage, "getItem").and.returnValue(null);
    const dispatchSpy = jest.spyOn(store, "dispatch");
    store.dispatch(
      CategoriesActions.loadCategoryNodeSuccess({
        categoryNode: mockCategoryNode,
      }),
    );
    expect(dispatchSpy).toHaveBeenCalledWith(
      CategoriesActions.saveCategoryNodeToLocalStorage({
        categoryNode: mockCategoryNode,
      }),
    );
  });

  it("state should set the menuOpenId on setMenuOpenId action", () => {
    const newMenuId = "menu1234567";
    const action = fromCategories.setMenuOpenId({ menuId: newMenuId });

    store.dispatch(action);

    store.select(fromCategories.selectMenuOpenId).subscribe((menuOpenId) => {
      expect(menuOpenId).toBe(newMenuId);
      console.log(menuOpenId);
    });
  });
});
