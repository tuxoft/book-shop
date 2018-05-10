import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ShopHeaderComponent } from './components/shop-header/shop-header.component';
import { ShopMenuHorizontalComponent } from './components/shop-menu-horizontal/shop-menu-horizontal.component';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './services/rest/book.service';
import { CartService } from './services/rest/cart.service';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { CartLogoComponent } from './components/cart-logo/cart-logo.component';
import { StoreModule } from '@ngrx/store';
import { storeReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CheckboxModule } from 'primeng/checkbox';
import { routes } from './app.routes';
import { ButtonModule } from 'primeng/primeng';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './effects/index';

@NgModule({
  declarations: [
    AppComponent,
    ShopHeaderComponent,
    ShopMenuHorizontalComponent,
    CartLogoComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    RouterModule,
    BrowserModule,
    HttpClientModule,
    MegaMenuModule,
    MenubarModule,
    CheckboxModule,
    ButtonModule,
    StoreModule.forRoot(storeReducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
    }),
  ],
  providers: [BookService, CartService],
  bootstrap: [AppComponent],
})
export class AppModule { }
