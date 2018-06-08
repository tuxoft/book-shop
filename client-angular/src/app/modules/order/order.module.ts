import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './order.routes';
import { OrderComponent } from './components/order/order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule, InputTextModule, InputMaskModule } from 'primeng/primeng';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { CommonComponentsModule } from '../common-components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    CommonComponentsModule,
  ],
  declarations: [OrderComponent, OrderSuccessComponent],
})
export class OrderModule { }
