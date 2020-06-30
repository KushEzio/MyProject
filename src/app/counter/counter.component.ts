import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  timerValue = 0;
  timerObject: { mytime: string; status: boolean; value: number }[] = [];
  timerStarted = false;
  startedCountValue = 0;
  pausedCountValue = 0;
  myCounter: any;

  constructor() {}

  ngOnInit(): void {}

  // Event from tcount component for countdown working
  onTimerStart(event) {
    console.log('fdffd');
    // debugger;
    this.timerObject.push({
      mytime: this.getDateFormat(new Date().toString()),
      status: event.statusTimer,
      value: this.timerValue,
    });
    this.timerStarted = event.statusTimer;
    if (this.timerStarted) {
      this.timerValue = this.timerValue ? this.timerValue : event.valueTimer;
      this.startedCountValue++;
      this.myCounter = setInterval(() => {
        if (this.timerStarted && this.timerValue) {
          this.timerValue = this.timerValue - 1;
        } else {
          clearInterval(this.myCounter);
        }
      }, 1000);
    } else {
      this.pausedCountValue++;
      clearInterval(this.myCounter);
    }
  }

  // on Reset event
  onTimerReset() {
    clearInterval(this.myCounter);
    this.timerValue = 0;
    this.startedCountValue = 0;
    this.pausedCountValue = 0;
    this.timerObject = [];
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
