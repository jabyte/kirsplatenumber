import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  customer = new Customer(
    0,
    '',
    '',
    '',
    '',
    '',
    ''
  );

  submitted = false;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
  }

  registerCustomer() {
    this.customerService.postCustomer(this.customer).subscribe(resp => {
      console.log(resp);
    });
  }
}
