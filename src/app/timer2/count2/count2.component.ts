import {
  Component,
  OnInit,
  OnDestroy,
  ɵsetCurrentInjector,
  ViewChild,
  ElementRef,
} from '@angular/core';

import { MytimeService } from '../mytime.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-count2',
  templateUrl: './count2.component.html',
  styleUrls: ['./count2.component.css'],
})
export class Count2Component implements OnInit, OnDestroy {
  timerNumber = 0;
  timerStatus: boolean;
  timerlogs = [];
  @ViewChild('timervalue') inputTxt: ElementRef;
  firstStart = true;
  timerEmitter: Subscription;
  pausedCountEmitter: Subscription;
  constructor(private myTime: MytimeService) {
    this.timerEmitter = this.myTime.timerEmitter.subscribe((value) => {
      this.timerNumber = value.valueTimer;
      this.timerStatus = value.statusTimer;
    });

    this.pausedCountEmitter = this.myTime.pausedLogValue.subscribe((value) => {
      this.timerlogs.push(value);
    });
  }

  ngOnInit(): void {}

  onStart(values: number) {
    debugger;
    const myval = values;
    if (this.firstStart === true) {
      this.firstStart = false;
      this.timerNumber = myval;
    }
    if (myval > 0) {
      if (this.timerNumber === 0) {
      } else {
        this.timerNumber = myval;
        this.myTime.timerEmitter.next({
          valueTimer: this.timerNumber,
          statusTimer: !this.timerStatus,
        });
      }
    }
  }

  onReset() {
    this.firstStart = true;
    this.myTime.timerReset.next(true);
    this.timerStatus = false;
    this.inputTxt.nativeElement.value = 0;
    this.timerNumber = 0;
    this.timerlogs = [];
  }

  ngOnDestroy() {
    // this.myTime.timerEmitter.unsubscribe();
    // this.myTime.pausedLogValue.unsubscribe();
  }
}
