import { Injectable } from '@angular/core';
import { map, switchMap, tap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { toPayload } from '../store/utils';
import * as CartActions from '../store/cart/cart.actions';
import { CartService } from '../services/rest/cart.service';
import { Observable } from 'rxjs/Observable';
import { Cart } from '../model/cart';

@Injectable()
export class CartEffects {

  constructor(private actions$: Actions, private cartService: CartService) {
  }

  @Effect()
  onCartInit$ = this.actions$.pipe(
    ofType(CartActions.INIT_CART),
    switchMap((action: any) => {
      return this.cartService.get();
    }),
    map((cart: Cart) => new CartActions.InitCartSuccess(cart)),
  );
}
