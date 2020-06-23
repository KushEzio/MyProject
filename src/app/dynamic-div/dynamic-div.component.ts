import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.css'],
})
export class DynamicDivComponent implements OnInit, OnDestroy {
  numbers: number[];
  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    // console.log('i am scrolling');
    const count = this.numbers.length;
    let numbers = Array(5)
      .fill(0)
      .map((x, i) => i + count + 1);
    // console.log(count, numbers);
    this.numbers = [...this.numbers, ...numbers];
  }

  constructor() {
    this.numbers = Array(5)
      .fill(0)
      .map((x, i) => i + 1);
  }

  ngOnInit(): void {
    // console.log('jjljljjl : ' + this.numbers);
  }
  clickEvent(number) {
    alert(number);
  }

  ngOnDestroy() {
    console.log('removing');
    // this.numbers = [];
  }
}
