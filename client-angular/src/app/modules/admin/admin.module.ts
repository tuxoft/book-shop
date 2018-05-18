import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { RouterModule } from '@angular/router';
import { routes } from './admin.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [BookEditComponent],
})
export class AdminModule { }
