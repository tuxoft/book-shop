import { Routes } from '@angular/router';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminPanelComponent,
    data: {
      title: 'Административная панель',
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
];
