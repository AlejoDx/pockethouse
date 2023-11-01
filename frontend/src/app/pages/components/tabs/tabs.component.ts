import { Injectable, Component } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
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
