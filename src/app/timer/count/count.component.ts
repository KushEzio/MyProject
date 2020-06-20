import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css'],
})
export class CountComponent implements OnInit {
  isStarted: boolean = false;
  countvalue: number = 0;
  countCtr: number = 0;
  statusList = [];
  timerId: any;
  countDown: number;

  intervalId: any;
  myCtr: number;
  pausedCount = [];
  startCount = [];
  firstStart = true;

  @Input() public data: any;
  @Output()
  public onData: EventEmitter<any> = new EventEmitter<any>();
  public onUpdateData: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  start(value: number, event) {
    // this.countCtr = this.data;
    this.isStarted = !this.isStarted;

    if (this.isStarted === true) {
      if (value) {
        if (this.firstStart === true) {
          this.countCtr = value;
          this.firstStart = false;
          this.myCtr = null;
        } else {
        }
      } else {
        if (this.firstStart === true) {
          this.countCtr = 0;
        }
      }
      this.statusList.push(
        'Started at ' + this.getDateFormat(new Date().toString())
      );
      this.onUpdateData.emit(this.statusList);
      this.intervalId = setInterval(() => {
        this.onData.emit(this.countCtr);
        this.countCtr--;
        console.log(this.countCtr);
      }, 1000);
    } else {
      clearInterval(this.intervalId);
      this.statusList.push(
        'Paused at ' + this.getDateFormat(new Date().toString())
      );
      this.onUpdateData.emit(this.statusList);
      this.pausedCount.push('Paused at ' + this.countCtr);
    }

    console.log(this.countCtr);

    console.log(this.statusList);

    // this.timerId = setInterval(() => {
    //   if (this.countDown === 0) {
    //     clearInterval(this.timerId);
    //     return;
    //   } else {
    //     this.countDown = this.countDown - 1;
    //     // this.data.changeCounter(this.countDown);
    //   }
    // }, 1000);
  }
  reset() {
    this.myCtr = this.countCtr = null;
    this.firstStart = true;
    this.pausedCount = [];
    clearInterval(this.intervalId);
    this.statusList.push(
      'Reset at ' + this.getDateFormat(new Date().toString())
    );
    this.onData.emit(this.myCtr);
    this.isStarted = false;
  }

  getDateFormat(date) {
    const dateObj = new Date(date);
    return `${dateObj.getDate()}-${
      +dateObj.getMonth() + 1
    }-${dateObj.getFullYear()}
    ${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()} ${
      +dateObj.getHours() <= 12 ? 'AM' : 'PM'
    }`;
  }

  // updateData() {
  //   console.log(this.countCtr);
  //   this.onData.emit(this.countCtr);
  // }
}
