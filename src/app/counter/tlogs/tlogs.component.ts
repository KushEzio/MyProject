import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tlogs',
  templateUrl: './tlogs.component.html',
  styleUrls: ['./tlogs.component.css'],
})
export class TlogsComponent implements OnInit {
  @Input() logTimer: { mytime: Date; status: boolean }[] = [];

  constructor() {}

  ngOnInit(): void {}
}
