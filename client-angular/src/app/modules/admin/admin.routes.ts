import { Routes } from '@angular/router';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { BookCreateComponent } from './components/book-create/book-create.component';

export const routes: Routes = [
  {
    path: 'book/edit/:id',
    component: BookEditComponent,
    data: {
      title: 'Редактирование книги',
    },
  },
  {
    path: 'book/create',
    component: BookCreateComponent,
  },
];
