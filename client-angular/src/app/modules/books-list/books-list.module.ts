import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BooksSimpleListComponent } from './components/books-simple-list/books-simple-list.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/primeng';
import { routes } from './books-list.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonModule,
  ],
  declarations: [
    BookCardComponent,
    BooksSimpleListComponent,
  ],
})
export class BooksListModule { }
