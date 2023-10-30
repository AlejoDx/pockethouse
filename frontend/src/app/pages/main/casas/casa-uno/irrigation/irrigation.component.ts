import { Component } from '@angular/core';

@Component({
  selector: 'app-irrigation',
  templateUrl: './irrigation.component.html',
  styleUrls: ['./irrigation.component.css']
})
export class IrrigationComponent {
  activeTab: string = 'patio';
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
