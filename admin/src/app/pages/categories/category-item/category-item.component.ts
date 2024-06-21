import { Input } from "@angular/core";
import { Component } from "@angular/core";
import { Category } from "../categories.component";

@Component({
  selector: "ngx-category-item",
  templateUrl: "./category-item.component.html",
  styleUrls: ["./category-item.component.scss"],
})
export class CategoryItemComponent {
  @Input() category: Category = {} as Category;
  isShowInterface = false;
}
