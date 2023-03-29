import { Injectable } from "@angular/core";
import { TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy } from "./teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy";
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
export class TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyService {
  endpoint = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyyById(
    id: any
  ): Observable<any> {
    return this.httpClient
      .get(
        `${this.endpoint}/teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy/${id}`
      )
      .pipe(catchError(this.errorHandler));
  }

  getTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy(): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy`)
      .pipe(catchError(this.errorHandler));
  }

  addTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy(
    data: TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy
  ): Observable<any> {
    return this.httpClient
      .post(
        `${this.endpoint}/teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  editTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy(
    id: any,
    data: TeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy
  ): Observable<any> {
    return this.httpClient
      .put(
        `${this.endpoint}/teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy/${id}`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  deleteTeacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy(
    id: number
  ): Observable<any> {
    return this.httpClient
      .delete(
        `${this.endpoint}/teacherStudentEntityyyyyyyyyyyyyyyyyyyyyyyyyyy/${id}`,
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
