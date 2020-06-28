import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MytimeService {
  constructor() {}
  timerEmitter = new Subject<{
    valueTimer: number;
    statusTimer: boolean;
  }>();
  pausedLogValue = new Subject<number>();
  timerReset = new Subject<boolean>();
}
