import { Component } from '@angular/core';
import { SavaalTopic } from './main-dashboard/savaal-topic.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Savaalii';
  storedSavaalTopics: SavaalTopic[] = [];

  onSavaalTopicAdded(savaalTopic: SavaalTopic) {
    this.storedSavaalTopics.push(savaalTopic);
  }
}
