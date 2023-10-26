import { Component } from '@angular/core';
import { faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-casa-uno',
  templateUrl: './casa-uno.component.html',
  styleUrls: ['./casa-uno.component.css']
})
export class CasaUnoComponent {
  public faSun=faSun;
  activeTab: string = 'comedor';
  isSwitchOn: boolean = false;
  backgroundColor: string = '#F8F8F8'; // Color de fondo predeterminado

  toggleSwitch() {
    this.isSwitchOn = !this.isSwitchOn;

    // Cambia el color de fondo cuando el interruptor cambie
    this.backgroundColor = this.isSwitchOn ? '#DEDDDD' : '#F8F8F8';
  }
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
