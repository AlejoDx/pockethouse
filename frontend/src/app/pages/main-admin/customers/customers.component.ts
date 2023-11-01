import { Component, OnInit, inject } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  public customers!:any[];
  rol:string="";
  private customersService = inject(CustomerService);
  loading=true;

  ngOnInit(): void {
   this.customersService.list().subscribe(customer=>{
    this.loading=false;
    this.customers=customer;
    console.log(customer);


   })
  }
}
