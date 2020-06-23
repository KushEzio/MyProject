import { Component, OnInit } from '@angular/core';
import { MytimeService } from '../mytime.service';

@Component({
  selector: 'app-timelimit2',
  templateUrl: './timelimit2.component.html',
  styleUrls: ['./timelimit2.component.css'],
})
export class Timelimit2Component implements OnInit {
  startCtr: number = 0;
  pauseCtr: number = 0;
  constructor(private _mytime: MytimeService) {}

  ngOnInit(): void {
    this._mytime.startCtr.subscribe((data) => {
      this.startCtr = data;
    });
    this._mytime.pauseCtr.subscribe((data) => {
      this.pauseCtr = data;
    });
  }
}
