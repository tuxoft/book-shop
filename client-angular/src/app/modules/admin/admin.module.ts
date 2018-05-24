import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { RouterModule } from '@angular/router';
import { routes } from './admin.routes';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule, InputTextModule } from 'primeng/primeng';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TreeTableModule } from 'primeng/treetable';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    AutoCompleteModule,
    TreeTableModule,
    TableModule,
  ],
  declarations: [
    BookEditComponent,
    BookCreateComponent,
    AdminPanelComponent,
    AdminMenuComponent,
    BookListComponent,
  ],
})
export class AdminModule { }
