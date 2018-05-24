import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: '../books-list/books-list.module#BooksListModule',
        data: {
          title: 'Главная',
        },
      },
      {
        path: 'cart',
        loadChildren: '../cart/cart.module#CartModule',
        data: {
          title: 'Корзина',
        },
      },
      {
        path: 'catalog',
        loadChildren: '../catalog/catalog.module#CatalogModule',
        data: {
          title: 'Каталог',
        },
      },
    ],
  },
];
