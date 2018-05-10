import { Routes } from '@angular/router';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { CatalogComponent } from './components/catalog/catalog.component';

export const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
  },
  {
    path: 'book/:id',
    component: BookDetailComponent,
  },
];
