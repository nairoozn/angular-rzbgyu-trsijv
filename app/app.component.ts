import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styles: ['.furniture { width: 250px; }'],
  template: `
    <div class="example-wrapper">
      <p>Select an item:</p>
      <kendo-dropdowntree
        kendoDropDownTreeExpandable
        [data]="data"
        [textField]="'text'"
        [valueField]="'id'"
        [childrenField]="'items'"
        class="furniture"
      >
      </kendo-dropdowntree>
    </div>
  `
})
export class AppComponent {
  public data: any[] = [
    {
      text: 'Furniture',
      id: 1,
      items: [
        { text: 'Tables & Chairs', id: 2 },
        { text: 'Sofas', id: 3 },
        { text: 'Occasional Furniture', id: 4 }
      ]
    },
    {
      text: 'Decor',
      id: 5,
      items: [{ text: 'Bed Linen', id: 6 }, { text: 'Carpets', id: 7 }]
    }
  ];
}
