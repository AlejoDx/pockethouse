import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  public activeTab: string = 'comedor';
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
