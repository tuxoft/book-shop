import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BookSimpleViewComponent } from './components/book-simple-view/book-simple-view.component';
import { BooksSimpleListComponent } from './components/books-simple-list/books-simple-list.component';


@NgModule({
  declarations: [
    AppComponent,
    BookSimpleViewComponent,
    BooksSimpleListComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
