import {
  Component,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "ngx-list",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent {
  @Output() showForm = new EventEmitter<void>();

  @Input() categories = [];
}
