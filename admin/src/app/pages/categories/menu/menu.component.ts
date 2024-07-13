import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CategoriesService, CategoryNode } from "../categories.service";
@Component({
  selector: "ngx-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
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

  toggleAddForm() {
    this.isAddFormOpen = !this.isAddFormOpen;
  }
  handleCloseAddForm() {
    this.isAddFormOpen = false;
  }
  handleCategoryAdded() {
    this.isAddFormOpen = false;
    this.categoryAdded.emit();
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
