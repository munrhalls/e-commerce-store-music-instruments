import { Component, OnInit, OnDestroy } from "@angular/core";
import { CategoriesService } from "./categories.service";
import { Subscription } from "rxjs";
import { CategoryNode } from "./categories.service";

@Component({
  selector: "ngx-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"],
})
export class CategoriesComponent implements OnInit {
  categoryNode: CategoryNode;
  private categoriesSubscription: Subscription;
  constructor(private categoriesService: CategoriesService) {}
  ngOnInit(): void {}
  // ngOnInit() {
  //   this.categoriesSubscription = this.categoriesService
  //     .getCategories()
  //     .subscribe((categoryNode) => {
  //       this.categoryNode = categoryNode;
  //     });
  // }

  // ngOnDestroy() {
  //   this.categoriesSubscription.unsubscribe();
  // }
}
