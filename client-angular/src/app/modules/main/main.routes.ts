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
        path: 'order',
        loadChildren: '../order/order.module#OrderModule',
        data: {
          title: 'Оформление заказа',
        },
      },
      {
        path: 'catalog',
        loadChildren: '../catalog/catalog.module#CatalogModule',
        data: {
          title: 'Каталог',
        },
      },
      {
        path: 'search',
        loadChildren: '../search/search.module#SearchModule',
        data: {
          title: 'Поиск книг',
        },
      },
      {
        path: 'profile',
        loadChildren: '../profile/profile.module#ProfileModule',
        data: {
          title: 'Мой профиль',
        },
      },
    ],
  },
];
