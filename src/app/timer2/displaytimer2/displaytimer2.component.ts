import { Component, OnInit } from '@angular/core';
import { MytimeService } from '../mytime.service';

@Component({
  selector: 'app-displaytimer2',
  templateUrl: './displaytimer2.component.html',
  styleUrls: ['./displaytimer2.component.css'],
})
export class Displaytimer2Component implements OnInit {
  constructor(private _mytime: MytimeService) {}
  countDown: number;

  ngOnInit(): void {
    this.countDown = 0;
    this._mytime.currentCounter.subscribe((count) => (this.countDown = count));
  }
}
