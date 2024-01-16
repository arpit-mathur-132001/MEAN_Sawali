import { Component } from '@angular/core';

@Component({
  selector: 'sawali-dashboard',
  templateUrl: './sawali-dashboard.component.html',
})
export class SawaliDashboard {
  newSawal = 'No Sawal!';
  onSave() {
    this.newSawal = 'New Sawal Added!';
  }
}
