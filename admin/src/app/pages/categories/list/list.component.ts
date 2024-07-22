import { Component, Input } from "@angular/core";
import { CategoryTree } from "./../categories.service";
@Component({
  selector: "ngx-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent {
  @Input() CategoryTree: CategoryTree;
}
