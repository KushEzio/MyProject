import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

interface CounterInfo {
  countdownCurrentValue: number;
  counterStatus: boolean;
}

@Component({
  selector: 'app-tcount',
  templateUrl: './tcount.component.html',
  styleUrls: ['./tcount.component.css'],
})
export class TcountComponent implements OnInit {
  @Input() counterLimit: number;
  countDownStatus: boolean;
  @Output() countDownStarted = new EventEmitter<CounterInfo>();
  @ViewChild('timervalue') inputTxt: ElementRef;
  @Output() countDownReset = new EventEmitter<any>();
  @Input() countDownLog: {
    timestamp: Date;
    status: boolean;
    value: number;
  }[] = [];
  firstStart = true;

  constructor() {}

  ngOnInit(): void {}

  // Function fired at Start/Pause Button
  onCountDownRun(values: number) {
    debugger;
    // console.log('onCountDownRun' + values);
    this.countDownStatus = !this.countDownStatus;
    const val = values;
    if (this.firstStart === true) {
      this.firstStart = false;
      this.counterLimit = val;
    }
    if (val > 0) {
      if (this.counterLimit === 0) {
      } else {
        this.counterLimit = val;
        this.countDownStarted.emit({
          countdownCurrentValue: this.counterLimit,
          counterStatus: this.countDownStatus,
        });
      }
    }
  }

  // Function fired at Reset button and emit event
  onCountDownReset() {
    debugger;
    this.countDownStatus = false;
    this.counterLimit = 0;
    this.inputTxt.nativeElement.value = 0;
    this.countDownReset.emit();
    this.firstStart = true;
  }
}
