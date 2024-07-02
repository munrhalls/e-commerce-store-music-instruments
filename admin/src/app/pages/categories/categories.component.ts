import { Component } from "@angular/core";
import { CategoriesService } from "./categories.service";
import { Subscription } from "rxjs";
import { CategoryNode } from "./categories.service";

@Component({
  selector: "ngx-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"],
})
export class CategoriesComponent {
  categoryNode: CategoryNode;
  constructor(private categoriesService: CategoriesService) {}
}
