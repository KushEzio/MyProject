import { Component, OnInit, OnDestroy } from '@angular/core';

import { MytimeService } from '../mytime.service';

@Component({
  selector: 'app-count2',
  templateUrl: './count2.component.html',
  styleUrls: ['./count2.component.css'],
})
export class Count2Component implements OnInit, OnDestroy {
  constructor(private _mytime: MytimeService) {}
  timerLimit: number;
  countDown: number;
  statusList = [];
  startCtr = 0;
  pauseCtr = 0;
  paused: any;
  isStarted: boolean;
  timerId: any;
  firstStart: boolean = true;

  ngOnInit(): void {
    this.paused = [];
    this.timerLimit = 0;
    this.countDown = 0;
    this.isStarted = false;
    this.firstStart = true;
  }

  reset() {
    this.paused = [];
    this.isStarted = false;
    this.countDown = 0;
    this.timerLimit = 0;
    this.startCtr = 0;
    this.pauseCtr = 0;
    this.statusList = [];
    this.firstStart = true;
    clearInterval(this.timerId);
    // this._mytime.currentCounter(this.countDown);
    this._mytime.changeCounter(this.countDown);
    this._mytime.logs.emit(this.statusList);
    this._mytime.startCtr.emit(this.startCtr);
    this._mytime.pauseCtr.emit(this.pauseCtr);
  }

  ngOnDestroy() {
    if (this.countDown === 0) {
      clearInterval(this.timerId);
    }
  }

  start(flag) {
    this.firstStart = false;
    if (this.timerLimit !== 0) {
      this.startCtr++;
      this._mytime.startCtr.emit(this.startCtr);
      this.statusList.push(
        'Started at ' + this.getDateFormat(new Date().toString())
      );
      this._mytime.logs.emit(this.statusList);
      this.isStarted = flag;
      this.timerId = setInterval(() => {
        if (this.countDown === 0) {
          clearInterval(this.timerId);
          return;
        } else {
          this.countDown = this.countDown - 1;
          this._mytime.changeCounter(this.countDown);
        }
      }, 1000);
    }
  }

  modelChanged(ev) {
    this.countDown = +ev;
  }

  pause(flag) {
    this.isStarted = flag;
    this.pauseCtr++;
    this._mytime.pauseCtr.emit(this.pauseCtr);
    this.statusList.push(
      'Paused at ' + this.getDateFormat(new Date().toString())
    );
    clearInterval(this.timerId);
    if (this.countDown !== 0) {
      this.paused.push('Paused at ' + this.countDown);
    }
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
