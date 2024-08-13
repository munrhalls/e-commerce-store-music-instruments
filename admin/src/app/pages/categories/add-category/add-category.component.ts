import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CategoriesService } from "../categories.service";
@Component({
  selector: "ngx-add-category",
  templateUrl: "./add-category.component.html",
  styleUrls: ["./add-category.component.scss"],
})
// import {CategoryTree} from "../categories.model";
export class AddCategoryComponent {
  constructor(private categoriesService: CategoriesService) {}

  @Input() categoryTree: any = { id: 0, name: "" };
  @Output() closed = new EventEmitter<void>();
  addFormGroup: FormGroup;
  @Output() categoryAdded = new EventEmitter<void>();

  emitClose() {
    this.closed.emit();
  }
  ngOnInit() {
    this.addFormGroup = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.maxLength(30),
      ]),
    });
  }
  get addName() {
    return this.addFormGroup.get("name");
  }
  onAddSubmit(e: Event) {
    e.preventDefault();
    if (this.addFormGroup.valid) {
      const newCategoryName = this.addName.value;
      this.categoriesService.addCategory(
        this.categoryTree.pathIds,
        newCategoryName,
      );
    }
    this.categoryAdded.emit();
    this.emitClose();
  }
}
