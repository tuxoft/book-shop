import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: './modules/books-list/books-list.module#BooksListModule',
        data: {
          title: 'Главная',
        },
      },
      {
        path: 'cart',
        loadChildren: './modules/cart/cart.module#CartModule',
        data: {
          title: 'Корзина',
        },
      },
      {
        path: 'catalog',
        loadChildren: './modules/catalog/catalog.module#CatalogModule',
        data: {
          title: 'Каталог',
        },
      },
      {
        path: 'admin',
        loadChildren: './modules/admin/admin.module#AdminModule',
        data: {
          title: 'Административная панель',
        },
      },
    ],
  },
];
