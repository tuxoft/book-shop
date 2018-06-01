import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './order.routes';
import { OrderComponent } from './components/order/order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule, InputTextModule, InputMaskModule } from 'primeng/primeng';
import { OrderTotalComponent } from './components/order-total/order-total.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
  ],
  declarations: [OrderComponent, OrderTotalComponent],
})
export class OrderModule { }
