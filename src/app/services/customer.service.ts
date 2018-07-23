import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Customer } from '../models/customer';

// Constants that are likely never going to change during execution.
const url = 'http://localhost:9000/customers';
// const url = 'https://fast-peak-21065.herokuapp.com';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    // 'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  postCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(url, customer, httpOptions)
      .pipe(catchError(this.handleError));
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(url)
      .pipe(catchError(this.handleError));
  }

  getCustomer(customerId: number): Observable<Customer> {
    return this.http.get<Customer>('${url}/' + customerId, httpOptions)
      .pipe(catchError(this.handleError));
  }

  putCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(url, customer, httpOptions)
      .pipe(catchError(this.handleError));
  }

  deleteCustomer(customerId: number): Observable<{}> {
    return this.http.delete('${url}/' + customerId, httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    return throwError('Something bad happened; please try again later.');
  }
}
