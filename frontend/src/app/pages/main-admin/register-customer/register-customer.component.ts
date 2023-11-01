import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {
  public listDays: number[] = [];
  public years: number[] = [];
  public listAddress: any[] = [];
  stateEnviroment = false;
  stateDevice=false;
  public listEnviroments: any[] = [];
  public listDevice: any[] = [];
  public formRegister!: FormGroup;

  public stateForm = "0";
  months: string[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril',
    'Mayo', 'Junio', 'Julio', 'Agosto',
    'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  private fb = inject(FormBuilder)
  ngOnInit(): void {
    this.formRegister = this.fb.group(

      {
        descripcionHouse: ['', [Validators.required]],
        direccionHouse: ['', [Validators.required]],
        topicHouse: ['', [Validators.required]],
        descripcionEnv: ['', [Validators.required]],
        topicEnv: ['', [Validators.required]],
        topicDevice: ['', [Validators.required]],
        descripcionDevice: ['', [Validators.required]],
        typeDevice: ['sensor', [Validators.required]],
      }
    )
    this.daysMonths();
    this.fillYearsArray();
  }
  daysMonths() {

    for (let i = 1; i <= 31; i++) {
      this.listDays.push(i);
    }
  }
  addHouse() {

    console.log(this.formRegister.value);
    this.listAddress.push(this.formRegister.value);
    console.log(this.listAddress);

  }
  habilitarFormEnviroment() {
    this.stateEnviroment = true;
  }
  habilitarFormDevice(){
    this.stateDevice=true;
  }


  addEviroment() {
    this.listEnviroments.push(this.formRegister.value);

  }
  addDevice() {
    this.listDevice.push(this.formRegister.value);
  }
  fillYearsArray() {
    const currentYear = new Date().getFullYear();
    for (let year = 1970; year <= currentYear; year++) {
      this.years.push(year);
    }
  }
  changeForm() {
    this.stateForm = "1";

  }
}
