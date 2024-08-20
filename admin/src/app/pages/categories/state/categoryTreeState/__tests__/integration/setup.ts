import { CategoriesState } from "../../../categories.reducer";
import * as categoryTreeActions from "../../category-tree.actions";
import { Actions } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { CategoryTreeEffects } from "../../category-tree.effects";
import { EffectsModule } from "@ngrx/effects";
import { CategoriesService } from "../../../../categories.service";
import { CategoryTree } from "../../../../categories.model";
import {
  categoryTreeReducer,
  CategoryTreeState,
  initialState as defaultInitialState,
} from "../../category-tree.reducer";
import { categoriesReducer } from "../../../categories.reducer";
import { Store, StoreModule } from "@ngrx/store";
import { selectCategoryTree } from "../../category-tree.selectors";
import { select } from "@ngrx/store";
import { metaReducers } from "../../../../../../app.module";

import { fakeAsync, tick, TestBed, flush } from "@angular/core/testing";
import { of, pipe, Observable, throwError } from "rxjs";
import { take, mergeMap, skip } from "rxjs/operators";
import { flushMicrotasks } from "zone.js/testing";
import { TestScheduler } from "rxjs/testing";
import { initialState as uiInitialState } from "./../../../uiState/ui-state.reducer";

export let store: Store;
export let effects: CategoryTreeEffects;

export const setupTestBed = (
  mockCategoriesService,
  testInitialState?: CategoryTreeState,
) => {
  TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot(
        {
          categories: categoriesReducer,
        },
        {
          initialState: {
            categories: {
              categoryTreeState: testInitialState || defaultInitialState,
              uiState: uiInitialState,
            },
          },
          metaReducers,
        },
      ),
      StoreModule.forFeature("categoryTree", categoryTreeReducer),
      EffectsModule.forRoot(),
      EffectsModule.forFeature([CategoryTreeEffects]),
    ],
    providers: [
      Store,
      {
        provide: CategoriesService,
        useValue: mockCategoriesService,
      },
      CategoryTreeEffects,
    ],
  });
  store = TestBed.inject(Store);
  effects = TestBed.inject(CategoryTreeEffects);
};
