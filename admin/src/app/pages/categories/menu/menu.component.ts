import { Component, Input } from "@angular/core";
import { CategoriesService } from "../categories.service";
@Component({
  selector: "ngx-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent {
  constructor(private categoriesService: CategoriesService) {}
  @Input() categoryNode: any = { id: 0, name: "" };
  isAddFormOpen = false;
  isEditFormOpen = false;

  toggleAddForm() {
    this.isAddFormOpen = !this.isAddFormOpen;
  }
  toggleEditForm() {
    this.isEditFormOpen = !this.isEditFormOpen;
  }
  delete() {
    this.categoriesService.deleteTarget(this.categoryNode.pathIds);
  }
  moveDown() {
    this.categoriesService.moveTargetDown(this.categoryNode.pathIds);
  }
  moveUp() {
    this.categoriesService.moveTargetUp(this.categoryNode.pathIds);
  }
}
