import { Component, Output, EventEmitter } from '@angular/core';
import { SavaalTopic } from '../savaal-topic.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'savaal-create',
  templateUrl: './savaal-create.component.html',
  styleUrl: './savaal-create.component.css',
})
export class SavaalCreateComponent {
  @Output() savaalTopicCreated = new EventEmitter<SavaalTopic>();
  onSave(postForm: NgForm) {
    if (postForm.invalid) return;
    const savaal = {
      topic: postForm.value.topic,
      description: postForm.value.description,
      isFlipped: false,
      flip() {
        this.isFlipped = !this.isFlipped;
      },
    };
    this.savaalTopicCreated.emit(savaal);
  }
}
