import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Timer2Component } from './timer2/timer2.component';
import { BoxComponent } from './box/box.component';
import { StudentsComponent } from './students/students.component';
import { DynamicDivComponent } from './dynamic-div/dynamic-div.component';

const routes: Routes = [
  {
    path: 'product',
    loadChildren: () =>
      import('./products/product.module').then((m) => m.ProductModule),
  },
  // { path: 'timer', component: TimerComponent },
  {
    path: 'timer',
    loadChildren: () =>
      import('./timer/timer.module').then((m) => m.TimerModule),
  },
  { path: 'timer2', component: Timer2Component },
  { path: 'box', component: BoxComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'dynamicDiv', component: DynamicDivComponent },
  { path: '', redirectTo: '/box', pathMatch: 'full' },
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes),
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      enableTracing: true,
    }),
  ],

  exports: [RouterModule],
})
export class AppRoutingModule {}
