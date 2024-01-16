import { Component } from '@angular/core';

@Component({
  selector: 'sawali-dashboard',
  templateUrl: './sawali-dashboard.component.html',
})
export class SawaliDashboard {
  newSawal = 'No Sawal!';
  onSave(sawalTitle: HTMLTextAreaElement) {
    this.newSawal = sawalTitle.value;
  }
}
