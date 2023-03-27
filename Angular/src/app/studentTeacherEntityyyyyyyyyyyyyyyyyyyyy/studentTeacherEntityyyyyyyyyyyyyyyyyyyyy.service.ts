import { Injectable } from "@angular/core";
import { StudentTeacherEntityyyyyyyyyyyyyyyyyyyyy } from "./studentTeacherEntityyyyyyyyyyyyyyyyyyyyy";
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
export class StudentTeacherEntityyyyyyyyyyyyyyyyyyyyyService {
  endpoint = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getStudentTeacherEntityyyyyyyyyyyyyyyyyyyyyById(id: any): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/studentTeacherEntityyyyyyyyyyyyyyyyyyyyy/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  getStudentTeacherEntityyyyyyyyyyyyyyyyyyyyy(): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/studentTeacherEntityyyyyyyyyyyyyyyyyyyyy`)
      .pipe(catchError(this.errorHandler));
  }

  addStudentTeacherEntityyyyyyyyyyyyyyyyyyyyy(
    data: StudentTeacherEntityyyyyyyyyyyyyyyyyyyyy
  ): Observable<any> {
    return this.httpClient
      .post(
        `${this.endpoint}/studentTeacherEntityyyyyyyyyyyyyyyyyyyyy`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  editStudentTeacherEntityyyyyyyyyyyyyyyyyyyyy(
    id: any,
    data: StudentTeacherEntityyyyyyyyyyyyyyyyyyyyy
  ): Observable<any> {
    return this.httpClient
      .put(
        `${this.endpoint}/studentTeacherEntityyyyyyyyyyyyyyyyyyyyy/${id}`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  deleteStudentTeacherEntityyyyyyyyyyyyyyyyyyyyy(id: number): Observable<any> {
    return this.httpClient
      .delete(
        `${this.endpoint}/studentTeacherEntityyyyyyyyyyyyyyyyyyyyy/${id}`,
        this.httpOptions
      )
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
