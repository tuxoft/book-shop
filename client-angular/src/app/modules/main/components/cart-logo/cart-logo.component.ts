import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { StoreState } from '../../../../store/reducers';
import { Observable } from 'rxjs/Observable';
import * as CartSelectors from '../../../../store/cart/cart.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-logo',
  templateUrl: './cart-logo.component.html',
  styleUrls: ['./cart-logo.component.scss'],
})
export class CartLogoComponent implements OnInit {

  constructor(private store: Store<StoreState>, private router: Router) { }

  numProducts$: Observable<number>;

  ngOnInit() {
    this.numProducts$ = this.store.select(CartSelectors.getCartOrderItemCount);
  }

  redirectToCart() {
    this.router.navigate(['/cart']);
  }
}
