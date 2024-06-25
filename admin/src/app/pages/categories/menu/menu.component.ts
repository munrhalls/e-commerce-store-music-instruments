import { Component, Input, TemplateRef } from "@angular/core";

import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from "@angular/forms";
import { NbDialogService } from "@nebular/theme";

@Component({
  selector: "ngx-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent {
  @Input() category: any = { id: 0, name: "" };
  subcategoryForm: FormGroup;

  get nameControl(): AbstractControl | null {
    console.log("status of the form name ctrl", () =>
      this.subcategoryForm.get("name"),
    );
    return this.subcategoryForm.get("name");
  }

  constructor(
    private dialogService: NbDialogService,
    private fb: FormBuilder,
  ) {
    this.subcategoryForm = this.fb.group({
      name: ["", Validators.required, Validators.maxLength(30)],
    });
  }

  getSubcategoryControlStatus(controlName: string) {
    console.log("form status", this.subcategoryForm.get(controlName).status);
    return this.subcategoryForm.get(controlName).status;
  }

  onSubmit(ref: any, event: Event) {
    console.log("submit!!!", this.subcategoryForm.value.name);
    event.preventDefault();
    console.log("now what?", this.subcategoryForm.valid);
    if (this.subcategoryForm.valid) {
      console.log("valid!");
      const newSubcategory = {
        id: Math.random(),
        name: this.subcategoryForm.value.name,
      };
      this.addSubcategory(newSubcategory, this.category);
      ref.close();
    }
  }

  addSubcategory(newSubcategory: any, category: any) {
    console.log("adding...");
    if (!category.children) {
      category.children = [];
    }
    category.children.push(newSubcategory);
    console.log("added?...", category.children);
  }

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {
      context: `${this.category.name}`,
    });
  }
}
