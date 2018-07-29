import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Engine} from '../models/engine';
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
export class EngineService {

  constructor(private http: HttpClient) {
  }

  postEngine(engine: Engine): Observable<Engine> {
    return this.http.post<Engine>(url, JSON.stringify(engine), httpOptions)
      .pipe(catchError(this.handleError));
  }

  getAllEngines(): Observable<Engine[]> {
    return this.http.get<Engine[]>(url)
      .pipe(catchError(this.handleError));
  }

  getEngine(engineId: number): Observable<Engine> {
    return this.http.get<Engine>('${url}/' + engineId, httpOptions)
      .pipe(catchError(this.handleError));
  }

  putEngine(engine: Engine): Observable<Engine> {
    return this.http.put<Engine>(url, engine, httpOptions)
      .pipe(catchError(this.handleError));
  }

  deleteEngine(engineId: number): Observable<{}> {
    return this.http.delete('${url}/' + engineId, httpOptions)
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
