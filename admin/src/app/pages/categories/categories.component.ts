import { Component } from "@angular/core";
import { ListComponent } from "./list/list.component";
// import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
  // constructor(private fb: FormBuilder) {}

  // onSubmit() {
  //   console.log(this.myForm.value);
  // }

  categories: Category[] = [
    {
      id: 1,
      name: "Category 1",
      children: [
        {
          id: 1.1,
          name: "Category 1.1",
          children: [
            { id: 1.11, name: "Category 1.1.1" },
            { id: 1.12, name: "Category 1.1.2" },
            {
              id: 1.13,
              name: "Category 1.1.3",
              children: [
                { id: 1.131, name: "Category 1.1.3.1" },
                { id: 1.131, name: "Category 1.1.3.2" },
                {
                  id: 1.131,
                  name: "Category 1.1.3.3",
                  children: [
                    { id: 1.1311, name: "Category 1.1.3.3.1" },
                    { id: 1.1312, name: "Category 1.1.3.3.2" },
                    {
                      id: 1.1313,
                      name: "Category 1.1.3.3.3",
                      children: [
                        { id: 1.13131, name: "Category 1.1.3.3.3.1" },
                        { id: 1.13332, name: "Category 1.1.3.3.3.2" }, // Added
                        {
                          id: 1.13333,
                          name: "Category 1.1.3.3.3.3",
                          children: [
                            { id: 1.133331, name: "Category 1.1.3.3.3.3.1" },
                            { id: 1.133332, name: "Category 1.1.3.3.3.3.2" },
                            {
                              id: 1.133333,
                              name: "Category 1.1.3.3.3.3.3",
                              children: [
                                {
                                  id: 1.1333331,
                                  name: "Category 1.1.3.3.3.3.3.1",
                                },
                                {
                                  id: 1.1333332,
                                  name: "Category 1.1.3.3.3.3.3.2",
                                },
                                {
                                  id: 1.1333333,
                                  name: "Category 1.1.3.3.3.3.3.3",
                                },
                              ],
                            },
                            { id: 1.1333334, name: "Category 1.1.3.3.3.3.3" },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        { id: 1.2, name: "Category 1.2" },
        { id: 1.2, name: "Category 1.3" },
      ],
    },
    { id: 2, name: "Category 2" },
    { id: 3, name: "Category 3" },
  ];
}
