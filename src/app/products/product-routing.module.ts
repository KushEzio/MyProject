import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { UserService } from './user.service';

const route: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
];
@NgModule({
  providers: [UserService],
  exports: [RouterModule],
  imports: [RouterModule.forChild(route)],
})
export class ProductRoutingModule {}
