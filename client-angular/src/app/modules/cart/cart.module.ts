import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './cart.routes';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { CheckboxModule } from 'primeng/checkbox';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CheckboxModule,
    InputTextModule,
    FormsModule,
  ],
  declarations: [
    CartPageComponent,
    CartItemComponent,
  ],
})
export class CartModule { }
