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
            of(
              categoryTreeActions.apiLoadError({
                error: new ServerConnectionError(),
              }),
            ),
          ),
        ),
      ),
    ),
  );

  apiAddCategoryToTarget$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Category Tree] API Create New Category"),
      exhaustMap((action) =>
        of(this.categoriesService.addCategoryToTarget(action)).pipe(
          map((categoryTree) =>
            categoryTreeActions.apiAddCategoryToTargetSuccess({ categoryTree }),
          ),
          catchError((error) =>
            of(categoryTreeActions.apiAddCategoryToTargetError({ error })),
          ),
        ),
      ),
    ),
  );

  apiUpdateTargetName$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Category Tree] API Update Target Name"),
      exhaustMap((action) =>
        of(this.categoriesService.updateTargetName(action)).pipe(
          map((categoryTree) =>
            categoryTreeActions.apiUpdateCategoryNameSuccess({ categoryTree }),
          ),
          catchError((error) =>
            of(categoryTreeActions.apiUpdateCategoryNameError({ error })),
          ),
        ),
      ),
    ),
  );

  apiMoveDown$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Category Tree] API Move Down"),
      exhaustMap((action) =>
        of(this.categoriesService.moveTargetDown(action)).pipe(
          map((categoryTree) =>
            categoryTreeActions.apiMoveDownSuccess({ categoryTree }),
          ),
          catchError((error) =>
            of(categoryTreeActions.apiMoveDownError({ error })),
          ),
        ),
      ),
    ),
  );

  apiMoveUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Category Tree] API Move Up"),
      exhaustMap((action) =>
        of(this.categoriesService.moveTargetUp(action)).pipe(
          map((categoryTree) =>
            categoryTreeActions.apiMoveUpSuccess({ categoryTree }),
          ),
          catchError((error) =>
            of(categoryTreeActions.apiMoveUpError({ error })),
          ),
        ),
      ),
    ),
  );

  apiDeleteCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Category Tree] API Delete Category"),
      exhaustMap((action) =>
        of(this.categoriesService.deleteTarget(action)).pipe(
          map((categoryTree) =>
            categoryTreeActions.apiDeleteCategorySuccess({ categoryTree }),
          ),
          catchError((error) =>
            of(categoryTreeActions.apiDeleteCategoryError({ error })),
          ),
        ),
      ),
    ),
  );
}
