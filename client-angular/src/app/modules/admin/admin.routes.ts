import { Routes } from '@angular/router';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { AppAuthGuard } from '../../services/auth/auth-guard';
import { AuthorListComponent } from './components/author-list/author-list.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminPanelComponent,
    canActivate: [AppAuthGuard],
    data: {
      title: 'Административная панель',
      roles: ['Content manager'],
    },
    children: [
      {
        path: 'books',
        component: BookListComponent,
        data: {
          title: 'Список книг',
          roles: ['Content manager'],
        },
      },
      {
        path: 'book/edit/:id',
        component: BookEditComponent,
        data: {
          title: 'Редактирование книги',
          roles: ['Content manager'],
        },
      },
      {
        path: 'book/create',
        component: BookCreateComponent,
        data: {
          title: 'Создание книги',
          roles: ['Content manager'],
        },
      },
      {
        path: 'authors',
        component: AuthorListComponent,
        data: {
          title: 'Список авторов',
          roles: ['Content manager'],
        },
      },
    ],
  },
];
