import { Component } from '@angular/core';

@Component({
  selector: 'savaalii-dashboard',
  templateUrl: './savaalii-dashboard.component.html',
})
export class SavaaliiDashboard {
  newSavaal = 'No Savaal!';
  onSave(savaalTitle: HTMLTextAreaElement) {
    this.newSavaal = savaalTitle.value;
  }
}
