import { Component } from '@angular/core';

@Component({
  selector: 'savaalii-dashboard',
  templateUrl: './savaalii-dashboard.component.html',
})
export class SavaaliiDashboard {
  enteredValue = '';
  newSavaal = 'No Savaal!';
  onSave() {
    this.newSavaal = this.enteredValue;
  }
}
