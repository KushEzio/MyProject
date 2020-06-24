import { Component, OnInit } from '@angular/core';
import { MytimeService } from '../mytime.service';

@Component({
  selector: 'app-timelimit2',
  templateUrl: './timelimit2.component.html',
  styleUrls: ['./timelimit2.component.css'],
})
export class Timelimit2Component implements OnInit {
  startCtr = 0;
  pauseCtr = 0;
  constructor(private myTime: MytimeService) {}

  ngOnInit(): void {
    this.myTime.startCtr.subscribe((data) => {
      this.startCtr = data;
    });
    this.myTime.pauseCtr.subscribe((data) => {
      this.pauseCtr = data;
    });
  }
}
