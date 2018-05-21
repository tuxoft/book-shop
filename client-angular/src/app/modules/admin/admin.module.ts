import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { RouterModule } from '@angular/router';
import { routes } from './admin.routes';
import { BookCreateComponent } from './components/book-create/book-create.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [BookEditComponent, BookCreateComponent],
})
export class AdminModule { }
