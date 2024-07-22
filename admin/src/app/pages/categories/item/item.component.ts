import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { CategoryTree } from "../categories.model";
import { CategoriesService } from "../categories.service";
import { Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";

@Component({
  selector: "ngx-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"],
})
export class ItemComponent {
  constructor(private categoriesService: CategoriesService) {}
  @Input() categoryTree: CategoryTree;
  @Input() nestingLevel: number = 0;
}
