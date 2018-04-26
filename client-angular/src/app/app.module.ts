import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ShopHeaderComponent } from './components/shop-header/shop-header.component';
import { ShopMenuHorizontalComponent } from './components/shop-menu-horizontal/shop-menu-horizontal.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksService } from './services/rest/books.service';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { CartLogoComponent } from './components/cart-logo/cart-logo.component';
import { StoreModule } from '@ngrx/store';
import { storeReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CheckboxModule } from 'primeng/checkbox';
import { routes } from './app.routes';
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
    StoreModule.forRoot(storeReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
    }),
  ],
  providers: [BooksService],
  bootstrap: [AppComponent],
})
export class AppModule { }
