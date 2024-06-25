import { Component, Input, TemplateRef } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NbDialogService } from "@nebular/theme";

@Component({
  selector: "ngx-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent {
  @Input() category: any = { id: 0, name: "" };
  subcategoryForm: FormGroup;

  constructor(
    private dialogService: NbDialogService,
    private fb: FormBuilder,
  ) {
    this.subcategoryForm = this.fb.group({
      name: ["", Validators.required, Validators.maxLength(30)],
    });
  }

  onSubmit(ref: any) {
    if (this.subcategoryForm.valid) {
      const newSubcategory = {
        id: Math.random(),
        name: this.subcategoryForm.value.name,
      };
      this.addSubcategory(newSubcategory, this.category);
      ref.close();
    }
  }
  addSubcategory(newSubcategory: any, category: any) {
    if (!category.children) {
      category.children = [];
    }
    category.children.push(newSubcategory);
  }
  getSubcategoryControlStatus(controlName: string) {}

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {
      context: `${this.category.name}`,
    });
  }
}
