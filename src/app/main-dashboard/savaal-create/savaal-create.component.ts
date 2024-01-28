import { Component } from '@angular/core';

@Component({
  selector: 'savaal-create',
  templateUrl: './savaal-create.component.html',
  styleUrl: './savaal-create.component.css',
})
export class SavaalCreateComponent {
  enteredValue = '';
  newSavaal = 'No Savaal!';
  onSave() {
    this.newSavaal = this.enteredValue;
  }
}
