import { Routes } from '@angular/router';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { BooksSimpleListComponent } from '../books-list/components/books-simple-list/books-simple-list.component';
import { CatalogBooksComponent } from './components/catalog-books/catalog-books.component';

export const routes: Routes = [
  {
    path: 'books',
    component: CatalogBooksComponent,
  },
  {
    path: 'book/:id',
    component: BookDetailComponent,
  },
  {
    path: ':id',
    component: CatalogComponent,
  },
];
