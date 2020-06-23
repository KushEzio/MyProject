import { Component, OnInit } from '@angular/core';
import { MytimeService } from '../mytime.service';

@Component({
  selector: 'app-logs2',
  templateUrl: './logs2.component.html',
  styleUrls: ['./logs2.component.css'],
})
export class Logs2Component implements OnInit {
  mylogs: [];

  constructor(private _mytime: MytimeService) {}

  ngOnInit(): void {
    this._mytime.logs.subscribe((log) => {
      this.mylogs = log;
    });
  }
}
