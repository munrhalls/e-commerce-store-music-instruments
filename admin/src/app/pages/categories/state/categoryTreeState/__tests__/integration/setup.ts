import * as categoryTreeActions from "../../category-tree.actions";
import { Actions } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { CategoryTreeEffects } from "../../category-tree.effects";
import { EffectsModule } from "@ngrx/effects";
import { CategoriesService } from "../../../../categories.service";
import { CategoryTree } from "../../../../categories.model";
import { ServerConnectionError } from "../../../../../../@core/error-handler/errors/serverConnectionError";

import {
  categoryTreeReducer,
  State,
  initialState,
} from "../../category-tree.reducer";
import { categoriesReducer } from "../../../categories.reducer";

import { Store, StoreModule } from "@ngrx/store";

import { fakeAsync, tick, TestBed, flush } from "@angular/core/testing";

import { selectCategoryTree } from "../../category-tree.selectors";
import { select } from "@ngrx/store";

import { of, pipe, Observable, throwError } from "rxjs";
import { take, mergeMap, skip } from "rxjs/operators";
import { flushMicrotasks } from "zone.js/testing";
import { TestScheduler } from "rxjs/testing";
import { metaReducers } from "../../../../../../app.module";
export let store: Store;
export let effects: CategoryTreeEffects;

export const setupTestBed = (mockCategoriesService) => {
  TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot(
        {
          categories: categoriesReducer,
        },
        { metaReducers },
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
