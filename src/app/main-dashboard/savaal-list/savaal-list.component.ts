import { Component, Input } from '@angular/core';
import { SavaalTopic } from '../savaal-topic.model';

@Component({
  selector: 'savaal-list',
  templateUrl: './savaal-list.component.html',
  styleUrl: './savaal-list.component.css',
})
export class SavaalListComponent {
  @Input() savaalTopics: SavaalTopic[] = [];
}
