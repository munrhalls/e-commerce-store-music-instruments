import { Component, Input, TemplateRef } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CategoriesService } from "../categories.service";
@Component({
  selector: "ngx-edit-category",
  templateUrl: "./edit-category.component.html",
  styleUrls: ["./edit-category.component.scss"],
})
export class EditCategoryComponent {
  editFormGroup: FormGroup;
  @Input() categoryNode: any = { id: 0, name: "" };
  isEditFormOpen = false;
  constructor(private categoriesService: CategoriesService) {}

  toggleEditForm() {
    this.isEditFormOpen = !this.isEditFormOpen;
  }
  ngOnInit() {
    this.isEditFormOpen = false;

    this.editFormGroup = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.maxLength(30),
      ]),
    });
  }

  ngAfterViewInit() {
    this.editFormGroup.get("name")?.setValue(this.categoryNode?.name || "");
  }

  get editName() {
    return this.editFormGroup.get("name");
  }

  onEditSubmit(e: Event) {
    e.preventDefault();
    if (this.editFormGroup.valid) {
      const newCategoryName = this.editName.value;

      this.categoriesService.updateTargetName(
        this.categoryNode.pathIds,
        newCategoryName,
      );
    }
  }
}
