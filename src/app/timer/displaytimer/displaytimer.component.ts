import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-displaytimer',
  templateUrl: './displaytimer.component.html',
  styleUrls: ['./displaytimer.component.css'],
})
export class DisplaytimerComponent implements OnInit {
  constructor() {}
  @Input() data: any = 0;

  ngOnInit(): void {}
}
