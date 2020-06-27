import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tlimit',
  templateUrl: './tlimit.component.html',
  styleUrls: ['./tlimit.component.css'],
})
export class TlimitComponent implements OnInit {
  @Input() countStarted = 0;
  @Input() countPaused = 0;
  

  constructor() {}

  ngOnInit(): void {}
}
