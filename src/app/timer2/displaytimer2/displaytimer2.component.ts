import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MytimeService } from '../mytime.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-displaytimer2',
  templateUrl: './displaytimer2.component.html',
  styleUrls: ['./displaytimer2.component.css'],
})
export class Displaytimer2Component implements OnInit, OnDestroy {
  data = 0;
  timerStarted = false;
  myCounter: any;
  timerEmitter: Subscription;
  timerReset: Subscription;
  constructor(private myTime: MytimeService) {
    this.timerEmitter = this.myTime.timerEmitter.subscribe((data) => {
      this.timerStarted = data.statusTimer;
      if (this.timerStarted) {
        this.data = this.data ? this.data : data.valueTimer;
        this.myCounter = setInterval(() => {
          if (this.timerStarted && this.data) {
            this.data = this.data - 1;
          } else {
            clearInterval(this.myCounter);
          }
        }, 1000);
      } else {
        this.myTime.pausedLogValue.next(this.data);
        clearInterval(this.myCounter);
      }
    });

    this.timerReset = this.myTime.timerReset.subscribe(() => {
      clearInterval(this.myCounter);
      this.data = 0;
    });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    // this.timerReset.unsubscribe();
    this.timerEmitter.unsubscribe();
    // this.myTime.pausedLogValue.unsubscribe();
    clearInterval(this.myCounter);
  }
}
