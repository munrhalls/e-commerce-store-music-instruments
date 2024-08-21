// import { CategoriesState } from "../../categories.reducer";
// import * as categoryTreeActions from "../category-tree.actions";
// import { CategoryTreeEffects } from "../category-tree.effects";
// import { EffectsModule } from "@ngrx/effects";
// import { CategoriesService } from "../../../categories.service";
// import {
//   categoryTreeReducer,
//   CategoryTreeState,
//   initialState as defaultInitialState,
// } from "../category-tree.reducer";
// import { categoriesReducer } from "../../categories.reducer";
// import { Store, StoreModule } from "@ngrx/store";
// import { metaReducers } from "../../../../app.module";

// import { TestBed } from "@angular/core/testing";
// import { TestScheduler } from "rxjs/testing";
// import { initialState as mobileUiState } from "../mobileUiState/mobileUiState.reducer";
// export let store: Store;
// export let effects: CategoryTreeEffects;

// export const setupTestBed = (
//   mockCategoriesService,
//   applyMetaReducers?: "withLocalStorageSync" | "noLocalStorageSync",
//   testInitialState?: CategoryTreeState,
// ) => {
//   TestBed.configureTestingModule({
//     imports: [
//       StoreModule.forRoot(
//         {
//           categories: categoriesReducer,
//         },
//         {
//           initialState: {
//             categories: {
//               categoryTreeState: testInitialState || defaultInitialState,
//               mobileUiState: mobileUiState,
//             },
//           },
//           metaReducers:
//             applyMetaReducers === "withLocalStorageSync" ? metaReducers : [],
//         },
//       ),
//       StoreModule.forFeature("categoryTree", categoryTreeReducer),
//       EffectsModule.forRoot(),
//       EffectsModule.forFeature([CategoryTreeEffects]),
//     ],
//     providers: [
//       Store,
//       {
//         provide: CategoriesService,
//         useValue: mockCategoriesService,
//       },
//       CategoryTreeEffects,
//     ],
//   });
//   store = TestBed.inject(Store);
//   effects = TestBed.inject(CategoryTreeEffects);
// };

// describe("SETUP", () => {
//   it("should setup TestBed", () => {
//     expect(true).toEqual(true);
//   });
// });
