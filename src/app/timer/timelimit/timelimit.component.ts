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
  @Input() start: number = 0;
  @Input() paused: number = 0;
  newlogs = 0;
  constructor() {}

  ngOnInit(): void {}
}
