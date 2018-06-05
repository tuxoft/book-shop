import { Routes } from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { AppAuthGuard } from '../../services/auth/auth-guard';
import { OrderSuccessComponent } from './components/order-success/order-success.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: OrderComponent,
        canActivate: [AppAuthGuard],
      },
      {
        path: 'success/:id',
        component: OrderSuccessComponent,
        canActivate: [AppAuthGuard],
      },
    ],
  },
];
