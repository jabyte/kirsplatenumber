import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Ownership } from '../models/ownership';

// Constants that are likely never going to change during execution.
const url = 'http://localhost:9000/ownerships';
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
export class OwnershipService {

  constructor(private http: HttpClient) {
  }

  postOwnership(ownership: Ownership): Observable<Ownership> {
    return this.http.post<Ownership>(url, ownership, httpOptions)
      .pipe(catchError(this.handleError));
  }

  getAllOwnerships(): Observable<Ownership[]> {
    return this.http.get<Ownership[]>(url)
      .pipe(catchError(this.handleError));
  }

  getOwnership(ownershipId: number): Observable<Ownership> {
    return this.http.get<Ownership>('${url}/' + ownershipId, httpOptions)
      .pipe(catchError(this.handleError));
  }

  putOwnership(ownership: Ownership): Observable<Ownership> {
    return this.http.put<Ownership>(url, ownership, httpOptions)
      .pipe(catchError(this.handleError));
  }

  deleteOwnership(ownershipId: number): Observable<{}> {
    return this.http.delete('${url}/' + ownershipId, httpOptions)
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
