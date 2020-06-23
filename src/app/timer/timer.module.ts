import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerRoutingModule } from './timer-routing.module';
import { TimerComponent } from './timer.component';
import { FormsModule } from '@angular/forms';
import { DisplaytimerComponent } from './displaytimer/displaytimer.component';
import { CountComponent } from './count/count.component';
import { LogsComponent } from './logs/logs.component';
import { TimelimitComponent } from './timelimit/timelimit.component';

@NgModule({
  imports: [TimerRoutingModule, CommonModule, FormsModule],

  declarations: [
    TimerComponent,
    DisplaytimerComponent,
    CountComponent,
    LogsComponent,
    TimelimitComponent,
  ],
})
export class TimerModule {}
