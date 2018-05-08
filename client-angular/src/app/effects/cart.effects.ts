import { Injectable } from '@angular/core';
import { map, switchMap, tap, mergeMap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { toPayload } from '../store/utils';
import * as CartActions from '../store/cart/cart.actions';
import { CartService } from '../services/rest/cart.service';
import { Observable } from 'rxjs/Observable';
import { Cart } from '../model/cart';
import { OrderItem } from '../model/order-item';
import { StoreState } from '../store/reducers';
import * as CartSelectors from '../store/cart/cart.selectors';

@Injectable()
export class CartEffects {

  cartId: string;

  constructor(private actions$: Actions,
              private cartService: CartService,
              private store: Store<StoreState>) {
    this.store.select(CartSelectors.getCartId).subscribe(
      cartId => this.cartId = cartId);
  }

  @Effect()
  onCartInit$ = this.actions$.pipe(
    ofType(CartActions.INIT_CART),
    switchMap((action: any) => {
      return this.cartService.get();
    }),
    map((cart: Cart) => new CartActions.InitCartSuccess(cart)),
  );

  @Effect()
  onAddToCart$ = this.actions$.pipe(
    ofType(CartActions.ADD_TO_CART),
    map(toPayload),
    mergeMap((action: any) => {
      return this.cartService.addToCart({
        cartId: this.cartId,
        bookId: action.book.id,
        count: action.count,
      });
    }),
    map((orderItem: OrderItem) => {
      return new CartActions.AddToCartSuccess(orderItem);
    }),
  );

  @Effect()
  onDeleteItem$ = this.actions$.pipe(
    ofType(CartActions.REMOVE_ITEM),
    map(toPayload),
    map(item => item.id),
    mergeMap((action: any) => {
      return this.cartService.deleteItem(action);
    }),
    map((action: any) => {
      return new CartActions.RemoveItemSuccess(action);
    }),
  );
}
