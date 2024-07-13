import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CategoriesService } from "../categories.service";
@Component({
  selector: "ngx-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent {
  constructor(private categoriesService: CategoriesService) {}
  @Input() categoryNode: any = { id: 0, name: "" };
  @Output() toggleIsConfirmDelete = new EventEmitter<void>();
  @Output() aboutToBeDeleted = new EventEmitter<void>();
  isAddFormOpen = false;
  isEditFormOpen = false;
  isShowConfirmDelete = false;

  toggleAddForm() {
    this.isAddFormOpen = !this.isAddFormOpen;
  }
  toggleEditForm() {
    this.isEditFormOpen = !this.isEditFormOpen;
  }
  delete() {
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
