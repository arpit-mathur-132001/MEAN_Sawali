import { Component } from '@angular/core';

@Component({
  selector: 'savaalii-dashboard',
  templateUrl: './savaalii-dashboard.component.html',
  styleUrl: './savaalii-dashboard.component.css',
})
export class SavaaliiDashboard {
  enteredValue = '';
  newSavaal = 'No Savaal!';
  onSave() {
    this.newSavaal = this.enteredValue;
  }
}
