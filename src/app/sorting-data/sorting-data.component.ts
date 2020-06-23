import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorting-data',
  templateUrl: './sorting-data.component.html',
  styleUrls: ['./sorting-data.component.css'],
})
export class SortingDataComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // route-6
    //   <div (scroll)="onScroll($event)" *ngFor="let number of numbers">
    //   <button (click)="clickEvent(number)">click me</button>
    // </div>
    // import { Component, OnInit, Inject, HostListener } from "@angular/core";
    // @Component({
    //   selector: "app-category-detail",
    //   templateUrl: "./category-detail.component.html",
    //   styleUrls: ["./category-detail.component.scss"],
    // })
    // export class CategoryDetailComponent implements OnInit {
    //   numbers: number[];
    //   @HostListener("window:scroll", ["$event"]) // for window scroll events
    //   onScroll(event) {
    //     const count = this.numbers.length;
    //     let numbers = Array(10)
    //       .fill(0)
    //       .map((x, i) => i + count + 1);
    //     console.log(count, numbers);
    //     this.numbers = [...this.numbers, ...numbers];
    //   }
    //   constructor(  ) {
    //     this.numbers = Array(10)
    //       .fill(0)
    //       .map((x, i) => i + 1);
    //   }
    //   ngOnInit() {}
    //   clickEvent(number) {
    //     alert(number);
    //   }
    // }
  }
}
