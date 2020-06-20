import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  public timer: any;
  onData: number;
  logsList: [];

  constructor() {}

  ngOnInit(): void {}

  updateData(event: any) {
    console.log(event);
    this.onData = event;
  }

  updateLogs(event: any) {
    console.log(event);
    this.logsList = event;
  }
}
