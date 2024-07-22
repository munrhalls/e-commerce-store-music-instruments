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

  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(categoryTreeActions["Category Tree Load Initiated"]),
      exhaustMap(() =>
        this.categoriesService.getCategoryTree().pipe(
          map((categoryTree) =>
            categoryTreeActions["Category Tree Loaded Success"]({
              categoryTree,
            }),
          ),
          catchError((error) => {
            if (error.status === 404) {
              return of(categoryTreeActions["Category Tree Not Found"]());
            } else {
              return of(
                categoryTreeActions["Category Tree Load Failed"]({ error }),
              );
            }
          }),
        ),
      ),
    ),
  );
}
