import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Timer2Component } from './timer2.component';

const routes: Routes = [{ path: '', component: Timer2Component }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class Timer2RoutingModule {}
