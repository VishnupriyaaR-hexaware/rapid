import { Injectable } from "@angular/core";
import { ProductConsumerEntityyyyyyyyyyyyyyyyyyyy } from "./productConsumerEntityyyyyyyyyyyyyyyyyyyy";
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
export class ProductConsumerEntityyyyyyyyyyyyyyyyyyyyService {
  endpoint = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getProductConsumerEntityyyyyyyyyyyyyyyyyyyyById(id: any): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/productConsumerEntityyyyyyyyyyyyyyyyyyyy/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  getProductConsumerEntityyyyyyyyyyyyyyyyyyyy(): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/productConsumerEntityyyyyyyyyyyyyyyyyyyy`)
      .pipe(catchError(this.errorHandler));
  }

  addProductConsumerEntityyyyyyyyyyyyyyyyyyyy(
    data: ProductConsumerEntityyyyyyyyyyyyyyyyyyyy
  ): Observable<any> {
    return this.httpClient
      .post(
        `${this.endpoint}/productConsumerEntityyyyyyyyyyyyyyyyyyyy`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  editProductConsumerEntityyyyyyyyyyyyyyyyyyyy(
    id: any,
    data: ProductConsumerEntityyyyyyyyyyyyyyyyyyyy
  ): Observable<any> {
    return this.httpClient
      .put(
        `${this.endpoint}/productConsumerEntityyyyyyyyyyyyyyyyyyyy/${id}`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  deleteProductConsumerEntityyyyyyyyyyyyyyyyyyyy(id: number): Observable<any> {
    return this.httpClient
      .delete(
        `${this.endpoint}/productConsumerEntityyyyyyyyyyyyyyyyyyyy/${id}`,
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
