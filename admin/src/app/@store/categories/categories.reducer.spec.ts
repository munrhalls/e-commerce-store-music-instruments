import { TestBed } from "@angular/core/testing";
import { StoreModule, Store } from "@ngrx/store";
import * as fromCategories from "./index";

describe("Categories Reducer", () => {
  let store: Store<fromCategories.CategoriesState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ categories: fromCategories.categoriesReducer }),
      ],
    });

    store = TestBed.inject(Store);
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
