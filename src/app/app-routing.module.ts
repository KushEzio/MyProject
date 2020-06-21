import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { TimerComponent } from './timer/timer.component';
import { Timer2Component } from './timer2/timer2.component';
import { BoxComponent } from './box/box.component';

const routes: Routes = [
  { path: 'product', component: ProductsComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'timer2', component: Timer2Component },
  { path: 'box', component: BoxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
