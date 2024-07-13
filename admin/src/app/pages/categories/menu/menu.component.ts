import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CategoriesService, CategoryNode } from "../categories.service";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "ngx-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
  animations: [
    trigger("animationCategoryAdded", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("1500ms ease-in-out", style({ opacity: 1 })),
      ]),
      transition(":leave", [
        animate("500ms ease-in-out", style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class MenuComponent {
  constructor(private categoriesService: CategoriesService) {}

  @Input() categoryNode: CategoryNode = {
    id: "",
    name: "",
    pathIds: [],
    children: [],
  };
  @Output() toggleIsConfirmDelete = new EventEmitter<void>();
  @Output() categoryAdded = new EventEmitter<void>();

  isAddFormOpen = false;
  isEditFormOpen = false;
  isShowConfirmDelete = false;
  isAnimationCategoryAdded = false;

  toggleAddForm() {
    this.isAddFormOpen = !this.isAddFormOpen;
  }
  handleCloseAddForm() {
    this.isAddFormOpen = false;
  }
  handleCategoryAdded() {
    this.isAddFormOpen = false;
    ``;
    console.log("isAnimationCategoryAdded ", "TRUE");
    this.isAnimationCategoryAdded = true;
    this.categoryAdded.emit();
  }
  animationCategoryAddedDone() {
    this.isAnimationCategoryAdded = false;
  }
  toggleEditForm() {
    this.isEditFormOpen = !this.isEditFormOpen;
  }
  handleDelete() {
    if (this.categoryNode.children.length === 0) {
      this.categoriesService.deleteTarget(this.categoryNode.pathIds);
    } else {
      this.isShowConfirmDelete = true;
      this.toggleIsConfirmDelete.emit();
    }
  }
  confirmDelete() {
    this.isShowConfirmDelete = false;
    this.categoriesService.deleteTarget(this.categoryNode.pathIds);
  }
  closeConfirmDelete() {
    this.isShowConfirmDelete = false;
    this.toggleIsConfirmDelete.emit();
  }
  moveDown() {
    this.categoriesService.moveTargetDown(this.categoryNode.pathIds);
  }
  moveUp() {
    this.categoriesService.moveTargetUp(this.categoryNode.pathIds);
  }
}
