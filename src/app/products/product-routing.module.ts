import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';

const route: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(route)],
})
export class ProductRoutingModule {}
