import { Injectable } from "@angular/core";
import { User } from "./user";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UserService {
  endpoint = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getUserById(id: any): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/user/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  getUser(): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/user`)
      .pipe(catchError(this.errorHandler));
  }

  addUser(data: User): Observable<any> {
    return this.httpClient
      .post(`${this.endpoint}/user`, JSON.stringify(data), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  editUser(id: any, data: User): Observable<any> {
    return this.httpClient
      .put(
        `${this.endpoint}/user/${id}`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  deleteUser(id: number): Observable<any> {
    return this.httpClient
      .delete(`${this.endpoint}/user/${id}`, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  // Error handling
  errorHandler(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
