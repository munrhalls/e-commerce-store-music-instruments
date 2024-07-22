import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CategoriesService } from "../categories.service";
import { trigger, transition, style, animate } from "@angular/animations";
import { CategoryTree } from "../categories.model";
@Component({
  selector: "ngx-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
  // animations: [
  //   trigger("animationCategoryAdded", [
  //     transition(":enter", [
  //       style({ opacity: 0 }),
  //       animate("1500ms ease-in-out", style({ opacity: 1 })),
  //     ]),
  //     transition(":leave", [
  //       animate("500ms ease-in-out", style({ opacity: 0 })),
  //     ]),
  //   ]),
  // ],
})
export class MenuComponent {
  constructor(private categoriesService: CategoriesService) {}

  @Input() categoryTree: CategoryTree = {
    id: "",
    name: "",
    pathIds: [],
    children: [],
  };
}
