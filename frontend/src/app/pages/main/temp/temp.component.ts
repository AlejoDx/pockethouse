import { Component } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent {
  activeTab: string = 'comedor';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

}
