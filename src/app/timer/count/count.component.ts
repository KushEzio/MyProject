import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css'],
})
export class CountComponent implements OnInit {
  isStarted: boolean = false;
  countCtr: number = 0;
  statusList = [];
  intervalId: any;
  myCtr: number = 0;
  pausedCount = [];
  startCount = 0;
  firstStart = true;

  @Input() public data: any;
  @Output()
  public onData: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onUpdateData: EventEmitter<any> = new EventEmitter<any>();

  @Output() public onPausedCount: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onStartCount: EventEmitter<number> = new EventEmitter<
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
      this.onStartCount.emit(this.startCount);
      // this.onUpdateData.emit(
      //   'Started at ' + this.getDateFormat(new Date().toString())
      // );
      this.onUpdateData.emit(this.statusList);
      // this.onUpdateData.emit(this.countCtr);
      this.intervalId = setInterval(() => {
        if (this.countCtr > 0) {
          this.countCtr--;
          this.onData.emit(this.countCtr);
          console.log(this.countCtr);
        }
      }, 1000);
    } else {
      clearInterval(this.intervalId);
      this.statusList.push(
        'Paused at ' + this.getDateFormat(new Date().toString())
      );
      this.pausedCount.push('Paused at ' + this.countCtr);
      this.onData.emit(this.countCtr);
      this.onUpdateData.emit(this.statusList);
      this.onPausedCount.emit(this.pausedCount);
    }

    console.log(this.countCtr);

    console.log(this.statusList);
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
    this.onUpdateData.emit(this.statusList);
    this.onData.emit(this.myCtr);
    this.onPausedCount.emit(this.pausedCount);
    this.onStartCount.emit(this.startCount);
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
