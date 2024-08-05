// import { TestBed } from "@angular/core/testing";
// import { StoreModule, Store } from "@ngrx/store";
// import * as fromCategories from "../state/categories.reducer"; // Your categories reducer
// import { localStorageSync } from "ngrx-store-localstorage";

// describe("Categories Integration (Local Storage)", () => {
//   let store: Store<fromCategories.State>; // Adjust State type if needed

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         StoreModule.forRoot({}),
//         StoreModule.forFeature(
//           fromCategories.categoriesFeatureKey,
//           fromCategories.reducer,
//           {
//             metaReducers: [localStorageSync({ keys: ["categories"] })],
//           },
//         ),
//       ],
//     });
//     store = TestBed.inject(Store);
//     localStorage.clear(); // Clear local storage before each test
//   });

//   // Tests will go here
// });

// it("should save categories to local storage", (done) => {
//   // Arrange: Set up initial state (if needed)
//   const categories = [{ id: 1, name: "Category A" }];
//   store.dispatch({ type: "[Categories] Load Categories Success", categories });

//   // Act: Dispatch action to trigger saving
//   store.dispatch({ type: "[Categories] Save Categories" });

//   // Assert: (This will fail initially)
//   store.select(fromCategories.selectCategories).subscribe((stateCategories) => {
//     expect(stateCategories).toEqual(categories);
//     expect(localStorage.getItem("categories")).toBe(JSON.stringify(categories));
//     done();
//   });
// });

// it("should load categories from local storage", (done) => {
//   // Arrange: Preload local storage with data
//   const categories = [{ id: 2, name: "Category B" }];
//   localStorage.setItem("categories", JSON.stringify(categories));

//   // Act: Dispatch action to trigger loading
//   store.dispatch({ type: "[Categories] Load Categories" }); // Or your actual action

//   // Assert: (This will fail initially)
//   store.select(fromCategories.selectCategories).subscribe((stateCategories) => {
//     expect(stateCategories).toEqual(categories);
//     done();
//   });
// });
