import { Component, Output, EventEmitter } from '@angular/core';
import { SavaalTopic } from '../savaal-topic.model';

@Component({
  selector: 'savaal-create',
  templateUrl: './savaal-create.component.html',
  styleUrl: './savaal-create.component.css',
})
export class SavaalCreateComponent {
  enteredTopic = '';
  enteredDescription = '';
  @Output() savaalTopicCreated = new EventEmitter<SavaalTopic>();
  onSave() {
    const savaal = {
      topic: this.enteredTopic,
      description: this.enteredDescription,
      isFlipped: false,
      flip() {
        this.isFlipped = !this.isFlipped;
      },
    };
    this.savaalTopicCreated.emit(savaal);
  }
}
