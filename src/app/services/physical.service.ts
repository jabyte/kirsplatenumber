import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Physical} from '../models/physical';

// Constants that are likely never going to change during execution.
const url = 'http://localhost:9000/physicals';
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
export class PhysicalService {

  constructor(private http: HttpClient) {
  }

  postPhysical(physical: Physical): Observable<Physical> {
    return this.http.post<Physical>(url, physical, httpOptions)
      .pipe(catchError(this.handleError));
  }

  getAllPhysicals(): Observable<Physical[]> {
    return this.http.get<Physical[]>(url)
      .pipe(catchError(this.handleError));
  }

  getPhysical(physicalId: number): Observable<Physical> {
    return this.http.get<Physical>('${url}/' + physicalId, httpOptions)
      .pipe(catchError(this.handleError));
  }

  putPhysical(physical: Physical): Observable<Physical> {
    return this.http.put<Physical>(url, physical, httpOptions)
      .pipe(catchError(this.handleError));
  }

  deletePhysical(physicalId: number): Observable<{}> {
    return this.http.delete('${url}/' + physicalId, httpOptions)
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
