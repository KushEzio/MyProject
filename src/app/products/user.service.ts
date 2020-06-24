import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}
  productList: Product[] = [];
  private getMyProducts = 'assets/products.json';

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  getProducts() {
    return this.httpClient
      .get(this.getMyProducts)
      .pipe(catchError(this.handleError));
  }

  // trying async
  getProducts2(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.getMyProducts);
  }
}
