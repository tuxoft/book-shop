import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: './modules/books-list/books-list.module#BooksListModule',
      },
      {
        path: 'cart',
        loadChildren: './modules/cart/cart.module#CartModule',
      },
    ],
  },
];
