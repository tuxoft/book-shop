import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './cart.routes';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CheckboxModule,
  ],
  declarations: [
    CartPageComponent,
  ],
})
export class CartModule { }
