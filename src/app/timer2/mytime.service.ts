import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MytimeService {
  constructor() {}
  // destroy$: Subject<boolean> = new Subject<boolean>();
  private messageSource = new BehaviorSubject(0);
  currentCounter = this.messageSource.asObservable();

  logs = new EventEmitter<any>();
  pauseCtr = new EventEmitter<number>();
  startCtr = new EventEmitter<number>();

  changeCounter(count: number) {
    this.messageSource.next(count);
  }
}
