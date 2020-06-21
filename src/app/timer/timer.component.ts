import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  public timer: any;
  onData: number;
  logsList: any;
  public strtCount: number;
  public pausedCount: any;

  constructor() {}

  ngOnInit(): void {}

  updateData(event: any) {
    console.log(event);
    this.onData = event;
    // alert(this.onData);
  }

  updateLogs(event: any) {
    console.log(event);
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
