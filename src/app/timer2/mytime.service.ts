import { Injectable, EventEmitter, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MytimeService implements OnDestroy {
  constructor() {}
  destroy$: Subject<boolean> = new Subject<boolean>();
  private messageSource = new BehaviorSubject(0);
  currentCounter = this.messageSource.asObservable();

  logs = new EventEmitter<any>();
  pauseCtr = new EventEmitter<number>();
  startCtr = new EventEmitter<number>();

  changeCounter(count: number) {
    this.messageSource.next(count);
  }
  ngOnDestroy() {
    // this.messageSource.unsubscribe();
    // this.destroy$.next();
    // this.destroy$.complete();
  }
}
