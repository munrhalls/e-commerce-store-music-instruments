import { createFeatureSelector } from "@ngrx/store";
import { CategoryTree } from "../../../pages/categories/categories.model";

export const selectCategoryTreeState =
  createFeatureSelector<CategoryTree>("categoryTree");
