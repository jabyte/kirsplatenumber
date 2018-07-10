import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../services/customer.service';
import {Customer} from '../models/customer';
import {error} from 'selenium-webdriver';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  customer = new Customer(
    null,
    null,
    '',
    null,
    null,
    null,
    null
  );

  submitted = false;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
  }

  registerCustomer(customer: Customer) {
    this.customerService.postCustomer(customer).subscribe(customer => {
      console.log(customer);
    });
  }

  // TODO: I'll remove this when I am done.
  get diagnostic() {
    return JSON.stringify(this.customer);
  }
}
