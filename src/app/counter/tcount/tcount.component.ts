import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

interface MyTimer {
  valueTimer: number;
  statusTimer: boolean;
}

@Component({
  selector: 'app-tcount',
  templateUrl: './tcount.component.html',
  styleUrls: ['./tcount.component.css'],
})
export class TcountComponent implements OnInit {
  @Input() timerNumber: number;
  timerStatus: boolean;
  @Output() timerStart = new EventEmitter<MyTimer>();
  @ViewChild('timervalue') inputTxt: ElementRef;
  @Output() timerReset = new EventEmitter<any>();
  @Input() timerlogs: {
    status: boolean;
    value: number;
  }[] = [];
  firstStart = true;

  constructor() {}

  ngOnInit(): void {}

  // Function fired at Start/Pause Button
  onStart(values: number) {
    // console.log('onStart' + values);
    this.timerStatus = !this.timerStatus;
    const myval = values;
    if (this.firstStart === true) {
      this.firstStart = false;
      this.timerNumber = myval;
    }
    if (myval > 0) {
      if (this.timerNumber === 0) {
      } else {
        this.timerNumber = myval;
        this.timerStart.emit({
          valueTimer: this.timerNumber,
          statusTimer: this.timerStatus,
        });
      }
    }
  }

  // Function fired at Reset button and emit event
  onReset() {
    this.timerStatus = false;
    this.timerNumber = 0;
    this.inputTxt.nativeElement.value = 0;
    this.timerReset.emit();
    this.firstStart = true;
  }
}
