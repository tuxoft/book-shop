import { Routes } from '@angular/router';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { AppAuthGuard } from '../../services/auth/auth-guard';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { AuthorEditComponent } from './components/author-edit/author-edit.component';
import { AuthorCreateComponent } from './components/author-create/author-create.component';
import { PublisherListComponent } from './components/publisher-list/publisher-list.component';
import { PublisherEditComponent } from './components/publisher-edit/publisher-edit.component';
import { PublisherCreateComponent } from './components/publisher-create/publisher-create.component';
import { BookSeriesListComponent } from './components/book-series-list/book-series-list.component';
import { BookSeriesEditComponent } from './components/book-series-edit/book-series-edit.component';
import { BookSeriesCreateComponent } from './components/book-series-create/book-series-create.component';

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
      {
        path: 'author/edit/:id',
        component: AuthorEditComponent,
        data: {
          title: 'Редактирование автора',
          roles: ['Content manager'],
        },
      },
      {
        path: 'author/create',
        component: AuthorCreateComponent,
        data: {
          title: 'Создание автора',
          roles: ['Content manager'],
        },
      },
      {
        path: 'publishers',
        component: PublisherListComponent,
        data: {
          title: 'Список издательств',
          roles: ['Content manager'],
        },
      },
      {
        path: 'publisher/edit/:id',
        component: PublisherEditComponent,
        data: {
          title: 'Редактирование издательства',
          roles: ['Content manager'],
        },
      },
      {
        path: 'publisher/create',
        component: PublisherCreateComponent,
        data: {
          title: 'Создание издательства',
          roles: ['Content manager'],
        },
      },
      {
        path: 'bookSeries',
        component: BookSeriesListComponent,
        data: {
          title: 'Список издательств',
          roles: ['Content manager'],
        },
      },
      {
        path: 'bookSeries/edit/:id',
        component: BookSeriesEditComponent,
        data: {
          title: 'Редактирование издательства',
          roles: ['Content manager'],
        },
      },
      {
        path: 'bookSeries/create',
        component: BookSeriesCreateComponent,
        data: {
          title: 'Создание издательства',
          roles: ['Content manager'],
        },
      },
    ],
  },
];
