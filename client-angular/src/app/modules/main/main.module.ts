import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { RouterModule } from '@angular/router';
import { routes } from './main.routes';
import { ShopHeaderComponent } from './components/shop-header/shop-header.component';
import { ShopMenuHorizontalComponent } from './components/shop-menu-horizontal/shop-menu-horizontal.component';
import { CartLogoComponent } from './components/cart-logo/cart-logo.component';
import { FormsModule } from '@angular/forms';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { CheckoutService } from '../../services/rest/checkout.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    CommonComponentsModule,
  ],
  declarations: [
    MainComponent,
    ShopHeaderComponent,
    ShopMenuHorizontalComponent,
    CartLogoComponent,
  ],
  providers: [
    CheckoutService,
  ],
})
export class MainModule { }
