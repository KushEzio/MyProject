import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  countDownLimit = 0;
  countDownLog: { timestamp: string; status: boolean; value: number }[] = [];
  countDownStatus = false;
  countDownStartedCount = 0;
  counter: any;
  countDownPausedCount = 0;

  constructor() {}

  ngOnInit(): void {}

  // Event from tcount component for countdown working
  onCountDownStart(event) {
    console.log('fdffd');
    debugger;
    this.countDownLog.push({
      timestamp: this.getDateFormat(new Date().toString()),
      status: event.counterStatus,
      value: this.countDownLimit,
    });
    this.countDownStatus = event.counterStatus;
    if (this.countDownStatus) {
      this.countDownLimit = this.countDownLimit
        ? this.countDownLimit
        : event.countdownCurrentValue;
      this.countDownStartedCount++;
      this.counter = setInterval(() => {
        if (this.countDownStatus && this.countDownLimit) {
          this.countDownLimit = this.countDownLimit - 1;
        } else {
          clearInterval(this.counter);
        }
      }, 1000);
    } else {
      this.countDownPausedCount++;
      clearInterval(this.counter);
    }
  }

  // runCounter = () => {
  //   if (this.countDownStatus && this.countDownLimit) {
  //     this.countDownLimit = this.countDownLimit - 1;
  //   } else {
  //     clearInterval(this.counter);
  //   }
  // };

  // on Reset event
  onCountDownReset() {
    clearInterval(this.counter);
    this.countDownLimit = 0;
    this.countDownStartedCount = 0;
    this.countDownPausedCount = 0;
    this.countDownLog = [];
  }

  // Formating Date in desired manner
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
