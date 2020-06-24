import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent {
  public timer: any;
  dataOn = 0;
  logsList: any;
  public strtCount: number;
  public pausedCount: any;

  constructor() {}

  updateData(event: any) {
    // console.log(event);
    this.dataOn = event;
    // alert(this.dataOn);
  }

  updateLogs(event: any) {
    // console.log(event);
    // alert('flkfldk');

    this.logsList = event;
    // alert(this.logsList);
  }
  StartLogs(event: any) {
    this.strtCount = event;
  }
  PausedLogs(event: any) {
    this.pausedCount = event.length;
  }
}
