import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { DeviceService } from '../../services/device.service';
import { EnvService } from '../../services/env.service';

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
  userService = inject(UserService);
  deviceService = inject(DeviceService);
  envDervice = inject(EnvService);

  client: any = {
      "email": "alguien@gmail.com",
      "image": "",
      "name": "alguien",
      "nameUser": "alguien",
      "password": "123456",
      "roles": [
        "ROLE_USER"
      ],
      "topic": "string"
  }

  newDevice: any = {
    "brand": "Jabius",
    "description": "string",
    "mqttClient": "client1",
    "sn": "sn123456",
    "subtopic": "string",
    "type": {
      "description": "SENSOR",
      "id": 1,
      "name": "SENSOR"
    },
    "unit": "C"
  }

  newEnvironment: any = {
    "description": "string",
    "devices": [],
    "name": "Nombre",
    "subTopic": "string"
  }

  loading: boolean = false;
  createdUser: any = {};
  public createdEnvironment: any[] = [];
  public createdDevices: any[] = [];

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
        formClientName:['Juan Carlos Mesa', [Validators.required]],
        formClientEmail:['jcm@gmail.com', [Validators.required]],
        formClientUser:['jcmesa', [Validators.required]],
        formClientAddr:['Av. Independencia 1234', [Validators.required]],
        formClientPassword:['jc123456', [Validators.required]],
        formClientTopic:['jcm', [Validators.required]],
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
    this.loading = true;
    this.client.name = this.formRegister.controls["formClientName"].value;
    this.client.nameUser = this.formRegister.controls["formClientUser"].value;
    this.client.email = this.formRegister.controls["formClientEmail"].value;
    this.client.password = this.formRegister.controls["formClientPassword"].value;
    this.client.topic = this.formRegister.controls["formClientTopic"].value;
    // this.userService.addUser(this.client).subscribe((resp: any)=>{
    //   console.log("Respuesta: " + resp.msg)
    //   this.loading = false;
    //   this.stateForm = "1";
    // })
    this.stateForm = "1";

  }

  saveData(){
    // this.listDevice.forEach((device)=>{
    //   this.newDevice.description = device.descripcionDevice;
    //   this.newDevice.subtopic = device.topicDevice;
    //   this.createdDevices.push(this.newDevice);
    //   //   this.deviceService.addDevice(this.newDevice).subscribe((resp: any)=>{
    // //   this.createdDevices.push(resp);
    // // })
    // })
    // this.listEnviroments.forEach((env)=>{
    //   this.newEnvironment.description = env.descripcionEnv;
    //   this.newEnvironment.topic = env.topicEnv;
    //   this.newEnvironment.devices = this.createdDevices;
    //   this.envDervice.addEnv(this.newEnvironment).subscribe((resp:any)=>{
    //     this.createdEnvironment.push(resp);
    //     console.log(this.createdEnvironment);
    // })
    // })

  }
}
