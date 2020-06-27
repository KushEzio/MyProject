import { Component, OnInit, Input } from '@angular/core';
import { MytimeService } from '../mytime.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timelimit2',
  templateUrl: './timelimit2.component.html',
  styleUrls: ['./timelimit2.component.css'],
})
export class Timelimit2Component implements OnInit {
  @Input() start = 0;
  @Input() paused = 0;
  timerEmitter: Subscription;
  timerReset: Subscription;
  constructor(private myTime: MytimeService) {}

  ngOnInit(): void {
    this.timerEmitter = this.myTime.timerEmitter.subscribe((value) => {
      value.statusTimer ? this.start++ : this.paused++;
    });
    this.timerReset = this.myTime.timerReset.subscribe(() => {
      this.start = 0;
      this.paused = 0;
    });
  }
}
