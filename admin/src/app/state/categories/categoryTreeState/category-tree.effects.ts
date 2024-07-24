import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, exhaustMap, catchError } from "rxjs/operators";
import { CategoriesService } from "../../../pages/categories/categories.service";
import { categoryTreeActions } from "./category-tree.actions";

@Injectable()
export class CategoryTreeEffects {
  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService,
  ) {}

  loadCategoriesFromLocalStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(categoryTreeActions.loadingFromLocalStorage),
      exhaustMap(() => {
        const categoryTree = null;
        if (categoryTree) {
          return of(
            categoryTreeActions.loadingFromLocalStorageSuccess({
              categoryTree: JSON.parse(categoryTree),
            }),
          );
        } else {
          return of(categoryTreeActions.loadingFromLocalStorageFailure());
        }
      }),
    ),
  );
}
