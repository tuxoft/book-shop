import { Routes } from '@angular/router';
import { CartPageComponent } from './components/cart-page/cart-page.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CartPageComponent,
      },
    ],
  },
];
