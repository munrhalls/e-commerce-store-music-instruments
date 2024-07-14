import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CategoriesService, CategoryNode } from "../categories.service";
import { trigger, transition, style, animate } from "@angular/animations";

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

  @Input() categoryNode: CategoryNode = {
    id: "",
    name: "",
    pathIds: [],
    children: [],
  };
}
