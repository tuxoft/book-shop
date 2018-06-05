import { Routes } from '@angular/router';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { ProfileOrdersComponent } from './components/profile-orders/profile-orders.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { AppAuthGuard } from '../../services/auth/auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: ProfilePageComponent,
    canActivate: [AppAuthGuard],
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
