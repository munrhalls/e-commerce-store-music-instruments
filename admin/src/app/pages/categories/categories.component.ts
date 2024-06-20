import { Component } from "@angular/core";
import { NbIconLibraries } from "@nebular/theme";
import { CdkDragDrop } from "@angular/cdk/drag-drop";

export interface Category {
  id: number;
  name: string;
  children?: Category[];
}

@Component({
  selector: "ngx-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"],
})
export class CategoriesComponent {
  categories: Category[] = [
    {
      id: 1,
      name: "Category 1",
      children: [
        {
          id: 2,
          name: "Category 1.1",
          children: [
            { id: 6, name: "Category 1.1.1" },
            { id: 7, name: "Category 1.1.2" },
            { id: 8, name: "Category 1.1.3" },
            { id: 9, name: "Category 1.1.4" },
            { id: 10, name: "Category 1.1.5" },
          ],
        },
        {
          id: 3,
          name: "Category 1.2",
          children: [
            { id: 11, name: "Category 1.2.1" },
            { id: 12, name: "Category 1.2.2" },
            { id: 13, name: "Category 1.2.3" },
            { id: 14, name: "Category 1.2.4" },
            { id: 15, name: "Category 1.2.5" },
          ],
        },
        {
          id: 3,
          name: "Category 1.3",
          children: [
            {
              id: 11,
              name: "Category 1.3.1",
              children: [
                { id: 16, name: "Category 1.3.1.1" },
                { id: 17, name: "Category 1.3.1.2" },
                { id: 18, name: "Category 1.3.1.3" },
                { id: 19, name: "Category 1.3.1.4" },
                { id: 20, name: "Category 1.3.1.5" },
              ],
            },
            {
              id: 21,
              name: "Category 1.3.2",
              children: [
                { id: 22, name: "Category 1.3.1.1" },
                { id: 23, name: "Category 1.3.1.2" },
                { id: 24, name: "Category 1.3.1.3" },
                { id: 25, name: "Category 1.3.1.4" },
                { id: 26, name: "Category 1.3.1.5" },
              ],
            },
            { id: 27, name: "Category 1.3.3" },
            { id: 28, name: "Category 1.3.4" },
            { id: 29, name: "Category 1.3.5" },
            { id: 30, name: "Category 1.3.6" },
          ],
        },
      ],
    },
    {
      id: 31,
      name: "Category 2",
    },
    {
      id: 32,
      name: "Category 3",
    },
  ];
  constructor() {}
}
