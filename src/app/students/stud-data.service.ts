import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Students } from './student.model';
@Injectable({
  providedIn: 'root',
})
export class StudDataService {
  constructor(private _httpClient: HttpClient) {}
  studentList: Students[] = [];
  private Get_Students = 'assets/products.json';

  getStudents() {
    return this._httpClient.get(this.Get_Students);
  }
}
