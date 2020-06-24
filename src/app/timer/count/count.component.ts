import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css'],
})
export class CountComponent implements OnInit {
  isStarted = false;
  countCtr = 0;
  statusList = [];
  intervalId: any;
  myCtr = 0;
  pausedCount = [];
  startCount = 0;
  firstStart = true;

  @Input() public data: any;
  @Output()
  public dataOn: EventEmitter<any> = new EventEmitter<any>();
  @Output() public updateDataOn: EventEmitter<any> = new EventEmitter<any>();

  @Output() public pausedCountOn: EventEmitter<any> = new EventEmitter<any>();
  @Output() public startCountOn: EventEmitter<number> = new EventEmitter<
    number
  >();

  constructor() {}

  ngOnInit(): void {
    this.myCtr = 0;
  }

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
      this.startCount += 1;
      this.startCountOn.emit(this.startCount);
      // this.updateDataOn.emit(
      //   'Started at ' + this.getDateFormat(new Date().toString())
      // );
      this.updateDataOn.emit(this.statusList);
      // this.updateDataOn.emit(this.countCtr);
      this.intervalId = setInterval(() => {
        if (this.countCtr > 0) {
          this.countCtr--;
          this.dataOn.emit(this.countCtr);
          // console.log(this.countCtr);
        }
      }, 1000);
    } else {
      clearInterval(this.intervalId);
      this.statusList.push(
        'Paused at ' + this.getDateFormat(new Date().toString())
      );
      this.pausedCount.push('Paused at ' + this.countCtr);
      this.dataOn.emit(this.countCtr);
      this.updateDataOn.emit(this.statusList);
      this.pausedCountOn.emit(this.pausedCount);
    }

    // console.log(this.countCtr);

    // console.log(this.statusList);
  }
  reset() {
    this.firstStart = true;
    this.pausedCount = [];
    this.startCount = 0;
    clearInterval(this.intervalId);
    this.myCtr = this.countCtr = null;
    this.statusList.push(
      'Reset at ' + this.getDateFormat(new Date().toString())
    );

    this.statusList = [];
    this.updateDataOn.emit(this.statusList);
    this.dataOn.emit(this.myCtr);
    this.pausedCountOn.emit(this.pausedCount);
    this.startCountOn.emit(this.startCount);
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
}
