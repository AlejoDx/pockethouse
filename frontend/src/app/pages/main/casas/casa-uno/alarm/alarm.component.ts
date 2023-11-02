import { Component } from '@angular/core';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.css']
})
export class AlarmComponent {
  activeTab: string = 'habitacion';
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
