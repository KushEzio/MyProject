import { Component, OnInit, OnDestroy } from '@angular/core';
import { MytimeService } from '../mytime.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-logs2',
  templateUrl: './logs2.component.html',
  styleUrls: ['./logs2.component.css'],
})
export class Logs2Component implements OnInit, OnDestroy {
  logTimer: { mytime: string; status: boolean }[] = [];
  timerEmitter: Subscription;
  timerReset: Subscription;

  constructor(private myTime: MytimeService) {
    this.timerEmitter = this.myTime.timerEmitter.subscribe((value) => {
      this.logTimer.push({
        mytime: this.getDateFormat(new Date().toString()),
        status: value.statusTimer,
      });
    });

    this.timerReset = this.myTime.timerReset.subscribe(() => {
      this.logTimer = [];
    });
  }

  ngOnInit(): void {}
  getDateFormat(date) {
    const dateObj = new Date(date);
    return `${dateObj.getDate()}-${
      +dateObj.getMonth() + 1
    }-${dateObj.getFullYear()}
    ${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()} ${
      +dateObj.getHours() <= 12 ? 'AM' : 'PM'
    }`;
  }
  ngOnDestroy() {
    // this.timerReset.unsubscribe();
    // this.timerEmitter.unsubscribe();
  }
}
