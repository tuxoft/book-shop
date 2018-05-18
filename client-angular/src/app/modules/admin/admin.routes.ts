import { Routes } from '@angular/router';
import { BookEditComponent } from './components/book-edit/book-edit.component';

export const routes: Routes = [
  {
    path: 'book/edit/:id',
    component: BookEditComponent,
  },
];
