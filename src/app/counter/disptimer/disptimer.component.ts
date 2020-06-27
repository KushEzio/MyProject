import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-disptimer',
  templateUrl: './disptimer.component.html',
  styleUrls: ['./disptimer.component.css'],
})
export class DisptimerComponent implements OnInit {
  @Input() countDownValue: number;
  constructor() {}

  ngOnInit(): void {}
}
