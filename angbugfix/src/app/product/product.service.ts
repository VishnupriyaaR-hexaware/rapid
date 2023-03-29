import { Injectable } from "@angular/core";
import { Product } from "./product";
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
export class ProductService {
  endpoint = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getProductById(id: any): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/product/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  getProduct(): Observable<any> {
    return this.httpClient
      .get(`${this.endpoint}/product`)
      .pipe(catchError(this.errorHandler));
  }

  addProduct(data: Product): Observable<any> {
    return this.httpClient
      .post(`${this.endpoint}/product`, JSON.stringify(data), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  editProduct(id: any, data: Product): Observable<any> {
    return this.httpClient
      .put(
        `${this.endpoint}/product/${id}`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  deleteProduct(id: number): Observable<any> {
    return this.httpClient
      .delete(`${this.endpoint}/product/${id}`, this.httpOptions)
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
