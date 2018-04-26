import { Routes } from '@angular/router';
import { BooksSimpleListComponent } from './components/books-simple-list/books-simple-list.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: BooksSimpleListComponent,
      },
    ],
  },
];
