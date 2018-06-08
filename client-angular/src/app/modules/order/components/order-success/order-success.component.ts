import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { StoreState } from '../../../../store/reducers';
import * as CartActions from '../../../../store/cart/cart.actions';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.scss'],
})
export class OrderSuccessComponent implements OnInit {

  id: number;

  constructor(private route: ActivatedRoute, private store: Store<StoreState>) {
    this.id = this.route.snapshot.params['id'];
    this.store.dispatch(new CartActions.InitCart());
  }

  ngOnInit() {
  }
}
