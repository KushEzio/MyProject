import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MytimeService } from '../mytime.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timelimit2',
  templateUrl: './timelimit2.component.html',
  styleUrls: ['./timelimit2.component.css'],
})
export class Timelimit2Component implements OnInit, OnDestroy {
  @Input() start = 0;
  @Input() paused = 0;
  timerEmitter: Subscription;
  timerReset: Subscription;
  
  constructor(private myTime: MytimeService) {
    this.timerEmitter = this.myTime.timerEmitter.subscribe((value) => {
      value.statusTimer ? this.start++ : this.paused++;
    });
    this.timerReset = this.myTime.timerReset.subscribe(() => {
      this.start = 0;
      this.paused = 0;
    });
  }

  ngOnInit(): void {}
  ngOnDestroy() {
    this.timerReset.unsubscribe();
    this.timerEmitter.unsubscribe();
  }
}
