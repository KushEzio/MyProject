import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Students } from './student.model';
@Injectable({
  providedIn: 'root',
})
export class StudDataService {
  constructor(private httpClient: HttpClient) {}
  studentList: Students[] = [];
  private getMyProducts = 'assets/products.json';

  getStudents() {
    return this.httpClient.get(this.getMyProducts);
  }
}
