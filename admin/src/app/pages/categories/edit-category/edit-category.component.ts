import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CategoriesService } from "../categories.service";

@Component({
  selector: "ngx-edit-category",
  templateUrl: "./edit-category.component.html",
  styleUrls: ["./edit-category.component.scss"],
})
export class EditCategoryComponent {
  constructor(private categoriesService: CategoriesService) {}
  @Input() categoryNode: any = { id: 0, name: "" };
  @Output() closed = new EventEmitter<void>();
  editFormGroup: FormGroup;

  emitClose() {
    this.closed.emit();
  }

  ngOnInit() {
    this.editFormGroup = new FormGroup({
      name: new FormControl(this.categoryNode?.name || "", [
        Validators.required,
        Validators.maxLength(30),
      ]),
    });
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
    this.emitClose();
  }
}
