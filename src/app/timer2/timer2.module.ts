import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Timer2RoutingModule } from './timer2-routing.module';

import { Count2Component } from './count2/count2.component';
import { Displaytimer2Component } from './displaytimer2/displaytimer2.component';

import { Timer2Component } from './timer2.component';
import { Timelimit2Component } from './timelimit2/timelimit2.component';
import { Logs2Component } from './logs2/logs2.component';

@NgModule({
  imports: [CommonModule, Timer2RoutingModule, FormsModule],
  declarations: [
    Timer2Component,
    Count2Component,
    Displaytimer2Component,
    Timelimit2Component,
    Logs2Component,
  ],
})
export class ServiceTimerModule {}
