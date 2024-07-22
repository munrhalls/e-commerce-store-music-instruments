import { Component, OnInit, OnDestroy } from "@angular/core";
import { CategoriesService } from "./categories.service";
import { Subscription } from "rxjs";
import { CategoryTree } from "./categories.model";

@Component({
  selector: "ngx-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"],
})
export class CategoriesComponent implements OnInit, OnDestroy {
  categoryTree: CategoryTree;
  private categoriesSubscription: Subscription;
  constructor(private categoriesService: CategoriesService) {}
  ngOnInit() {
    this.categoriesSubscription = this.categoriesService
      .getCategoryTree()
      .subscribe((categoryTree) => {
        console.log(categoryTree, " @CategoriesComponent");
        this.categoryTree = categoryTree;
      });
  }

  ngOnDestroy() {
    this.categoriesSubscription.unsubscribe();
  }
}
