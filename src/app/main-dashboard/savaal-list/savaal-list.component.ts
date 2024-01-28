import { Component, Input } from '@angular/core';

@Component({
  selector: 'savaal-list',
  templateUrl: './savaal-list.component.html',
  styleUrl: './savaal-list.component.css',
})
export class SavaalListComponent {
  @Input() savaalTopics: any = [];
}
