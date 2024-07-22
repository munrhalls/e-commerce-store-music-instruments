import { Component, OnInit, OnDestroy } from "@angular/core";
import { CategoriesService } from "./categories.service";
import { Subscription } from "rxjs";
import { CategoryTree } from "./categories.service";

@Component({
  selector: "ngx-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"],
})
export class CategoriesComponent implements OnInit, OnDestroy {
  CategoryTree: CategoryTree;
  private categoriesSubscription: Subscription;
  constructor(private categoriesService: CategoriesService) {}
  ngOnInit() {
    this.categoriesSubscription = this.categoriesService
      .getCategoryTree()
      .subscribe((CategoryTree) => {
        console.log(CategoryTree, " @CategoriesComponent");
        this.CategoryTree = CategoryTree;
      });
  }

  ngOnDestroy() {
    this.categoriesSubscription.unsubscribe();
  }
}
