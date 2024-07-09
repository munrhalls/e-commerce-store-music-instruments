import { Component, Input } from "@angular/core";
import { CategoryNode } from "./../categories.service";
@Component({
  selector: "ngx-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent {
  @Input() categoryNode: CategoryNode;
}
