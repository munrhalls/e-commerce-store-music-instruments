import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, exhaustMap, catchError } from "rxjs/operators";
import { CategoriesService } from "../../../categories/categories.service";
import * as categoryTreeActions from "./category-tree.actions";
import { ErrorModel } from "../../../../@core/error-handler/error.model";
import { HttpErrorResponse } from "@angular/common/http";
import { ServerConnectionError } from "../../../../@core/error-handler/errors/serverConnectionError";
@Injectable()
export class CategoryTreeEffects {
  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService,
  ) {}

  apiLoadCategoryTree$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Category Tree] API Load"),
      exhaustMap(() =>
        this.categoriesService.fetchCategoryTree().pipe(
          map((categoryTree) =>
            categoryTreeActions.apiLoadSuccess({ categoryTree }),
          ),
          catchError((error) =>
            of(categoryTreeActions.apiLoadError({ error })),
          ),
        ),
      ),
    ),
  );
}
