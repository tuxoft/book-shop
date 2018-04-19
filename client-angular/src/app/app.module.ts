import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BookSimpleViewComponent } from './components/book-simple-view/book-simple-view.component';
import { BooksSimpleListComponent } from './components/books-simple-list/books-simple-list.component';
import { ShopHeaderComponent } from './components/shop-header/shop-header.component';
import { ButtonModule } from 'primeng/primeng';
import { ShopMenuHorizontalComponent } from './components/shop-menu-horizontal/shop-menu-horizontal.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksService } from './services/rest/books.service';


@NgModule({
  declarations: [
    AppComponent,
    BookSimpleViewComponent,
    BooksSimpleListComponent,
    ShopHeaderComponent,
    ShopMenuHorizontalComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    HttpClientModule,
  ],
  providers: [BooksService],
  bootstrap: [AppComponent],
})
export class AppModule { }
