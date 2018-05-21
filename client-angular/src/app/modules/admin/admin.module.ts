import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { RouterModule } from '@angular/router';
import { routes } from './admin.routes';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule, InputTextModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
  ],
  declarations: [BookEditComponent, BookCreateComponent],
})
export class AdminModule { }
