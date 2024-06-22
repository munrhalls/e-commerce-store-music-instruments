import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "ngx-list",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent {
  @Input() categories = [];
}
