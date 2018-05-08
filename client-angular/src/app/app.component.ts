import { Component, OnInit } from '@angular/core';
import { CartService } from './services/rest/cart.service';
import { StoreState } from './store/reducers';
import * as CartActions from './store/cart/cart.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private cartService: CartService, private store: Store<StoreState>) { }

  ngOnInit() {
    console.log('Once generated!');
    this.store.dispatch(new CartActions.InitCart());
  }
}
