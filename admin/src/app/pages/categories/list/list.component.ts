import { Component, Input } from "@angular/core";
import { Category } from "../categories.component";
@Component({
  selector: "ngx-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent {
  @Input() categories = [];
}
