import { Routes } from '@angular/router';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { BookListComponent } from './components/book-list/book-list.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminPanelComponent,
    data: {
      title: 'Административная панель',
    },
    children: [
      {
        path: 'books',
        component: BookListComponent,
        data: {
          title: 'Список книг',
        },
      },
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
    ],
  },
];
