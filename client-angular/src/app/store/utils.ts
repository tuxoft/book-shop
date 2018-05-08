import { Action } from '@ngrx/store';

export interface UnsafeAction extends Action {
  payload?: any;
}

export const toPayload = (action: UnsafeAction) => action.payload;
