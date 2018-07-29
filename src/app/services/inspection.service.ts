import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Inspection} from '../models/inspection';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

// Constants that are likely never going to change during execution.
const url = 'http://localhost:9000/inspections';
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
export class InspectionService {

  constructor(private http: HttpClient) {
  }

  postInspection(inspection: Inspection): Observable<Inspection> {
    return this.http.post<Inspection>(url, inspection, httpOptions)
      .pipe(catchError(this.handleError));
  }

  getAllInspections(): Observable<Inspection[]> {
    return this.http.get<Inspection[]>(url)
      .pipe(catchError(this.handleError));
  }

  getInspection(inspectionId: number): Observable<Inspection> {
    return this.http.get<Inspection>('${url}/' + inspectionId, httpOptions)
      .pipe(catchError(this.handleError));
  }

  putInspection(inspection: Inspection): Observable<Inspection> {
    return this.http.put<Inspection>(url, inspection, httpOptions)
      .pipe(catchError(this.handleError));
  }

  deleteInspection(inspectionId: number): Observable<{}> {
    return this.http.delete('${url}/' + inspectionId, httpOptions)
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
