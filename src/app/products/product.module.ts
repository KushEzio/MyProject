import { ProductsComponent } from './products.component';
import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-routing.module';

import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ProductRoutingModule, CommonModule],

  declarations: [ProductsComponent],
})
export class ProductModule {}
