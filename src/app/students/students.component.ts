import { Component, OnInit } from '@angular/core';

import { StudDataService } from './stud-data.service';
import { Students } from './student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  constructor(private studDataService: StudDataService) {}
  students: Students[] = [];
  launchStudents: any;
  mycol: string;

  header: any;
  order: number;
  lastorder: string;

  ngOnInit(): void {
    this.lastorder = '';
    this.order = 0;
    this.initStudents();
  }
  initStudents() {
    this.studDataService.getStudents().subscribe((data: any[]) => {
      this.launchStudents = data.slice(0, 40).map((product) => {
        return {
          title: product.title,
          type: product.type,
          price: product.price,
        };
      });
      this.students = [...this.launchStudents];
      this.header = Object.keys(this.students[0]);
    });
  }
  sorting(event: any) {
    this.mycol = event.target.innerHTML;
    this.sort_by_key_all(this.students, this.mycol, this.order);
  }

  sort_by_key_all(array, key, order) {
    key = key.trim();
    if (key !== this.lastorder) {
      this.order = 1;
      this.lastorder = key;
      return array.sort((a, b) =>
        a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0
      );
    } else {
      if (order === 0 && key === this.lastorder) {
        this.order += 1;
        return array.sort((a, b) => {
          return a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
        });
      } else if (order === 1) {
        this.order += 1;
        return array.sort((a, b) => {
          return a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0;
        });
      } else {
        this.order = 0;
        this.lastorder = '';
        this.students = [...this.launchStudents];
        return this.students;
      }
    }
  }
}
