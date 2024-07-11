import { Component, Input, TemplateRef } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CategoriesService } from "../categories.service";

@Component({
  selector: "ngx-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent {
  formGroup: FormGroup;
  @Input() category: any = { id: 0, name: "" };
  isAddFormOpen = false;

  constructor(private categoriesService: CategoriesService) {}

  toggleAddForm() {
    this.isAddFormOpen = !this.isAddFormOpen;
  }
  ngOnInit() {
    console.log(this.category, " category");
    this.isAddFormOpen = false;

    this.formGroup = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.maxLength(30),
      ]),
    });
  }
  get name() {
    return this.formGroup.get("name");
  }
  onSubmit(e: Event) {
    e.preventDefault();
    if (this.formGroup.valid) {
      const newCategoryName = this.name.value;
      this.categoriesService.addCategoryToTarget(
        this.category.pathIds,
        newCategoryName,
      );
    }
  }
}
