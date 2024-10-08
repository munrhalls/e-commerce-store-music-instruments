import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of, throwError } from "rxjs";
import { map, exhaustMap, catchError } from "rxjs/operators";
import { CategoriesService } from "../../../categories/categories.service";
import { CategoryTree } from "../../../categories/categories.model";
import * as categoryTreeActions from "./category-tree.actions";
import { ErrorModel } from "../../../../@core/error-handler/error.model";
import { HttpErrorResponse } from "@angular/common/http";
import { ServerConnectionError } from "../../../../@core/error-handler/errors/serverConnectionError";

import { Observable } from "rxjs";
@Injectable()
export class CategoryTreeEffects {
  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService,
  ) {}

  apiAdd$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(categoryTreeActions.apiAdd),
      exhaustMap((action) => {
        return this.categoriesService
          .addCategory(action.targetPathIds, action.newCategory)
          .pipe(
            map((categoryTree) => {
              return categoryTreeActions.apiAddSuccess({ categoryTree });
            }),
            catchError((error: Error) => {
              return of(
                categoryTreeActions.apiAddError({
                  error: "API error",
                }),
              );
            }),
          );
      }),
    );
  });

  apiLoad$ = createEffect(() =>
    this.actions$.pipe(
      ofType(categoryTreeActions.apiLoad),
      exhaustMap(() => {
        return this.categoriesService.fetchCategoryTree().pipe(
          map((categoryTree) =>
            categoryTreeActions.apiLoadSuccess({ categoryTree }),
          ),
          catchError((error: Error) => {
            return of(
              categoryTreeActions.apiLoadError({
                error: "API error",
              }),
            );
          }),
        );
      }),
    ),
  );

  apiUpdateName$ = createEffect(() =>
    this.actions$.pipe(
      ofType(categoryTreeActions.apiUpdateName),
      exhaustMap((action) => {
        return this.categoriesService
          .updateName(action.targetPathIds, action.name)
          .pipe(
            map((categoryTree) =>
              categoryTreeActions.apiUpdateNameSuccess({ categoryTree }),
            ),
            catchError((error: Error) =>
              of(
                categoryTreeActions.apiUpdateNameError({
                  error: "API error",
                }),
              ),
            ),
          );
      }),
    ),
  );

  apiMoveDown$ = createEffect(() =>
    this.actions$.pipe(
      ofType(categoryTreeActions.apiMoveDown),
      exhaustMap((action) =>
        this.categoriesService.moveCategoryDown(action.targetPathIds).pipe(
          map((categoryTree) =>
            categoryTreeActions.apiMoveDownSuccess({ categoryTree }),
          ),
          catchError((error) =>
            of(
              categoryTreeActions.apiMoveDownError({
                error: "API error",
              }),
            ),
          ),
        ),
      ),
    ),
  );

  apiMoveUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(categoryTreeActions.apiMoveUp),
      exhaustMap((action) =>
        this.categoriesService.moveCategoryUp(action.targetPathIds).pipe(
          map((categoryTree) =>
            categoryTreeActions.apiMoveUpSuccess({ categoryTree }),
          ),
          catchError((error) =>
            of(
              categoryTreeActions.apiMoveUpError({
                error: "API error",
              }),
            ),
          ),
        ),
      ),
    ),
  );

  apiDelete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(categoryTreeActions.apiDelete),
      exhaustMap((action) =>
        this.categoriesService.deleteCategory(action.targetPathIds).pipe(
          map((categoryTree) =>
            categoryTreeActions.apiDeleteSuccess({ categoryTree }),
          ),
          catchError((error) =>
            of(
              categoryTreeActions.apiDeleteError({
                error: "API error",
              }),
            ),
          ),
        ),
      ),
    ),
  );
}
