import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {
  public listDays:number[]=[];
  public years: number[] = [];
  public stateForm="0";
  months: string[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril',
    'Mayo', 'Junio', 'Julio', 'Agosto',
    'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  ngOnInit(): void {
    this.daysMonths();
    this.fillYearsArray();
  }
  daysMonths(){

    for (let i = 1; i <= 31; i++) {
      this.listDays.push(i);
    }
  }


  fillYearsArray() {
    const currentYear = new Date().getFullYear();
    for (let year = 1970; year <= currentYear; year++) {
      this.years.push(year);
    }
  }
  changeForm(){
    this.stateForm="1";

  }
}
