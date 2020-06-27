import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MytimeService {
  constructor() {}
  // destroy$: Subject<boolean> = new Subject<boolean>();
  // private messageSource = new BehaviorSubject(0);
  timerEmitter = new Subject<{
    valueTimer: number;
    statusTimer: boolean;
  }>();
  pausedLogValue = new Subject<number>();
  timerReset = new Subject<boolean>();
}
