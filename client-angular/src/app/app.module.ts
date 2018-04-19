import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BooksSimpleListComponent } from './components/books-simple-list/books-simple-list.component';
import { ShopHeaderComponent } from './components/shop-header/shop-header.component';
import { ButtonModule } from 'primeng/primeng';
import { ShopMenuHorizontalComponent } from './components/shop-menu-horizontal/shop-menu-horizontal.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksService } from './services/rest/books.service';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    BooksSimpleListComponent,
    ShopHeaderComponent,
    ShopMenuHorizontalComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    HttpClientModule,
    MegaMenuModule,
    MenubarModule,
  ],
  providers: [BooksService],
  bootstrap: [AppComponent],
})
export class AppModule { }
