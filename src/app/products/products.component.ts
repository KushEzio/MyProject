import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { UserService } from './user.service';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private _userService: UserService) {}
  products: Product[] = [];
  isGrid: boolean;
  destroy$: Subject<boolean> = new Subject<boolean>();
  launchProducts: any;

  ngOnInit(): void {
    this.initProducts();
  }
  initProducts() {
    this._userService
      .getProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any[]) => {
        this.launchProducts = data.slice(0, 40).map((product) => {
          return {
            price: product.price,
            id: product.id,
            title: product.title,
            description: product.description,
          };
        });
        this.products = [...this.launchProducts];
      });
  }

  priceFilter(val:string) {
    switch (val) {
      case '1':
        this.products.sort((a, b) => b.price - a.price);
        break;
      case '2':
        this.products.sort((a, b) => a.price - b.price);
        break;
      case '3':
        this.products = [...this.launchProducts];
        break;
    }
  }
}
