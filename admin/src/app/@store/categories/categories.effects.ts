import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, catchError, switchMap } from "rxjs/operators";
import * as CategoriesActions from "./categories.actions";
import { CategoriesService } from "../../pages/categories/categories.service";

@Injectable()
export class CategoriesEffects {
  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoriesActions.loadCategoryNode),
      switchMap(() =>
        this.categoriesService.getCategoryNode$().pipe(
          map((categoryNode) =>
            CategoriesActions.loadCategoryNodeSuccess({ categoryNode }),
          ),
          catchError((error) =>
            of(CategoriesActions.loadCategoryNodeError({ error })),
          ),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService,
  ) {}
}
