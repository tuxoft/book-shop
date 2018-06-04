import { Routes } from '@angular/router';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { ProfileOrdersComponent } from './components/profile-orders/profile-orders.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';

export const routes: Routes = [
  {
    path: '',
    component: ProfilePageComponent,
    children: [
      {
        path: 'orders',
        component: ProfileOrdersComponent,
      },
      {
        path: 'info',
        component: ProfileInfoComponent,
      },
    ],
  },
];
