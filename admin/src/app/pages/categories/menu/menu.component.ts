import { Component, OnInit, Input, TemplateRef } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CategoriesService } from "../categories.service";

@Component({
  selector: "ngx-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  formGroup: FormGroup;
  @Input() category: any = { id: 0, name: "" };
  constructor(
    private dialogService: NbDialogService,
    private categoriesService: CategoriesService,
  ) {}

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {
      context: `${this.category.name}`,
    });
  }
  ngOnInit() {
    console.log(this.category, " category");
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
      this.categoriesService.addCategory(newCategoryName, this.category.id);
    }
  }
}
