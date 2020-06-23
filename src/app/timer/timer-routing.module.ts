import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TimerComponent } from './timer.component';

const route: Routes = [
  {
    path: '',
    component: TimerComponent,
  },
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(route)],
})
export class TimerRoutingModule {}
