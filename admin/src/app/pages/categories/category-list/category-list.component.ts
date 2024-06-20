import { Component, Input } from "@angular/core";
import { Category } from "../categories.component";

@Component({
  selector: "ngx-category-list",
  templateUrl: "./category-list.component.html",
  styleUrls: ["./category-list.component.scss"],
})
export class CategoryListComponent {
  @Input() children: Category[] = [];

  constructor() {}
}
