import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Vehicle} from '../models/vehicle';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

// Constants that are likely never going to change during execution.
const url = 'http://localhost:9000/vehicles';
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
export class VehicleService {

  constructor(private http: HttpClient) {
  }

  postVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(url, vehicle, httpOptions)
      .pipe(catchError(this.handleError));
  }

  getAllVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(url)
      .pipe(catchError(this.handleError));
  }

  getVehicle(vehicleId: number): Observable<Vehicle> {
    return this.http.get<Vehicle>('${url}/' + vehicleId, httpOptions)
      .pipe(catchError(this.handleError));
  }

  putVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.put<Vehicle>(url, vehicle, httpOptions)
      .pipe(catchError(this.handleError));
  }

  deleteVehicle(vehicleId: number): Observable<{}> {
    return this.http.delete('${url}/' + vehicleId, httpOptions)
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
