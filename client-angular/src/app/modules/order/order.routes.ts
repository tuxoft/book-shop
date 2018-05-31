import { Routes } from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { AppAuthGuard } from '../../services/auth/auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
    canActivate: [AppAuthGuard],
    children: [
    ],
  },
];
