import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { RouterModule } from '@angular/router';
import { routes } from './admin.routes';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule, InputTextModule, InputTextareaModule } from 'primeng/primeng';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TreeTableModule } from 'primeng/treetable';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { TableModule } from 'primeng/table';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { AuthorEditComponent } from './components/author-edit/author-edit.component';
import { AuthorCreateComponent } from './components/author-create/author-create.component';
import { PublisherListComponent } from './components/publisher-list/publisher-list.component';
import { PublisherEditComponent } from './components/publisher-edit/publisher-edit.component';
import { PublisherCreateComponent } from './components/publisher-create/publisher-create.component';
import { BookSeriesListComponent } from './components/book-series-list/book-series-list.component';
import { BookSeriesEditComponent } from './components/book-series-edit/book-series-edit.component';
import { BookSeriesCreateComponent } from './components/book-series-create/book-series-create.component';
import { UploadService } from '../../services/rest/upload.service';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    AutoCompleteModule,
    TreeTableModule,
    TableModule,
    FileUploadModule,
  ],
  declarations: [
    BookEditComponent,
    BookCreateComponent,
    AdminPanelComponent,
    AdminMenuComponent,
    BookListComponent,
    AuthorListComponent,
    AuthorEditComponent,
    AuthorCreateComponent,
    PublisherListComponent,
    PublisherEditComponent,
    PublisherCreateComponent,
    BookSeriesListComponent,
    BookSeriesEditComponent,
    BookSeriesCreateComponent,
  ],
  providers: [
    UploadService,
  ],
})
export class AdminModule { }
