import { Component, Input, TemplateRef, OnInit } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "ngx-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  formGroup: FormGroup;

  @Input() category: any = { id: 0, name: "" };
  constructor(private dialogService: NbDialogService) {}

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {
      context: `${this.category.name}`,
    });
  }
  ngOnInit() {
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
      // Process the form data
      console.log(this.formGroup.value);
    }
    // return false;
  }
}
