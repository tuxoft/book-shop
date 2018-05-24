import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/main/main.module#MainModule',
    data: {
      title: 'Главная',
    },
  },
  {
    path: 'admin',
    loadChildren: './modules/admin/admin.module#AdminModule',
    data: {
      title: 'Административная панель',
    },
  },
];
