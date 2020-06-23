import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
  DoCheck,
} from '@angular/core';

@Component({
  selector: 'app-timelimit',
  templateUrl: './timelimit.component.html',
  styleUrls: ['./timelimit.component.css'],
})
export class TimelimitComponent implements OnInit {
  @Input() start: number;
  @Input() paused: number;
  newlogs = 0;
  constructor() {}

  ngOnInit(): void {
    this.start = 0;
    this.paused = 0;
  }
}
