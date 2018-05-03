import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './cart.routes';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { CheckboxModule } from 'primeng/checkbox';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CartTotalComponent } from './components/cart-total/cart-total.component';
import { ButtonModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CheckboxModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
  ],
  declarations: [
    CartPageComponent,
    CartItemComponent,
    CartTotalComponent,
  ],
})
export class CartModule { }
