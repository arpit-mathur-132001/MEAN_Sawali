import { Component } from '@angular/core';

@Component({
  selector: 'savaal-list',
  templateUrl: './savaal-list.component.html',
  styleUrl: './savaal-list.component.css',
})
export class SavaalListComponent {
  savaalTopics = [
    {
      topic: 'First Topic',
      description: 'This is the first topic description',
      toggleProperty: false,
      toggle() {
        this.toggleProperty = !this.toggleProperty;
      },
    },
    {
      topic: 'Second Topic',
      description: 'This is the second topic description',
      toggleProperty: false,
      toggle() {
        this.toggleProperty = !this.toggleProperty;
      },
    },
    {
      topic: 'Third Topic',
      description: 'This is the third topic description',
      toggleProperty: false,
      toggle() {
        this.toggleProperty = !this.toggleProperty;
      },
    },
    {
      topic: 'Third Topic',
      description: 'This is the third topic description',
      toggleProperty: false,
      toggle() {
        this.toggleProperty = !this.toggleProperty;
      },
    },
    {
      topic: 'Third Topic',
      description: 'This is the third topic description',
      toggleProperty: false,
      toggle() {
        this.toggleProperty = !this.toggleProperty;
      },
    },
    {
      topic: 'Third Topic',
      description: 'This is the third topic description',
      toggleProperty: false,
      toggle() {
        this.toggleProperty = !this.toggleProperty;
      },
    },
    {
      topic: 'Third Topic',
      description: 'This is the third topic description',
      toggleProperty: false,
      toggle() {
        this.toggleProperty = !this.toggleProperty;
      },
    },
    {
      topic: 'Third Topic',
      description: 'This is the third topic description',
      toggleProperty: false,
      toggle() {
        this.toggleProperty = !this.toggleProperty;
      },
    },
    {
      topic: 'Third Topic',
      description: 'This is the third topic description',
      toggleProperty: false,
      toggle() {
        this.toggleProperty = !this.toggleProperty;
      },
    },
    {
      topic: 'Third Topic',
      description: 'This is the third topic description',
      toggleProperty: false,
      toggle() {
        this.toggleProperty = !this.toggleProperty;
      },
    },
    {
      topic: 'Third Topic',
      description: 'This is the third topic description',
      toggleProperty: false,
      toggle() {
        this.toggleProperty = !this.toggleProperty;
      },
    },
  ];
}
