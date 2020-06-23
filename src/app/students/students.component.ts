import { Component, OnInit } from '@angular/core';

import { StudDataService } from './stud-data.service';
import { Students } from './student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  constructor(private _studDataService: StudDataService) {}
  students: Students[] = [];
  launchStudents: any;
  mycol: string;
  fclick: boolean = false;
  sclick: boolean;
  tclick: boolean;

  header: any;
  order: number;
  lastorder: string;

  ngOnInit(): void {
    this.lastorder = '';
    this.order = 0;
    this.initStudents();
  }
  initStudents() {
    this._studDataService.getStudents().subscribe((data: any[]) => {
      this.launchStudents = data.slice(0, 40).map((product) => {
        return {
          title: product.title,
          type: product.type,
          price: product.price,
        };
      });
      this.students = [...this.launchStudents];
      console.log(this.students);
      this.header = Object.keys(this.students[1]);
      console.log(this.header);
    });
  }
  sorting(event: any) {
    console.log(event.target.innerHTML);
    this.mycol = event.target.innerHTML;
    // if (this.mycol == 'title') {
    //   if (this.fclick == false) {
    //     this.sort_by_key_asc(this.students, this.mycol);
    //     this.fclick = true;
    //   }
    // }
    // this.lastorder = this.mycol;
    this.sort_by_key_asc(this.students, this.mycol);
    // this.sort_by_key_all(this.students, this.mycol, this.order);
    // this.sort_by_key(this.students, this.mycol);
  }

  sort_by_key_all(array, key, order) {
    if (key != this.lastorder) {
      this.order = 1;
      this.lastorder = key;
      return array.sort(function (a, b) {
        var x = a[key];
        var y = b[key];
        return x < y ? -1 : x > y ? 1 : 0;
      });
    }
    if (order == 0 && key == this.lastorder) {
      this.order += 1;
      return array.sort(function (a, b) {
        var x = a[key];
        var y = b[key];
        return x > y ? -1 : x > y ? 1 : 0;
      });
    } else if (order == 1) {
      this.order += 1;
      return array.sort(function (a, b) {
        var x = a[key];
        var y = b[key];
        return x < y ? -1 : x > y ? 1 : 0;
      });
    } else {
      this.order = 0;
      return array.sort(function (a, b) {
        var x = a[key];
        var y = b[key];
        return x < y ? -1 : x > y ? 1 : 0;
      });
    }
  }

  sort_by_key(array, key) {
    return array.sort(function (a, b) {
      var x = a[key];
      var y = b[key];
      return x > y ? -1 : x > y ? 1 : 0;
    });
  }

  sort_by_key_asc(array, key) {
    return array.sort(function (a, b) {
      var x = a[key];
      var y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }
}
