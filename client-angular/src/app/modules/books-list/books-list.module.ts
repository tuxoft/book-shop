import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksSimpleListComponent } from './components/books-simple-list/books-simple-list.component';
import { RouterModule } from '@angular/router';
import { routes } from './books-list.routes';
import { CommonComponentsModule } from '../common-components/common-components.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CommonComponentsModule,
  ],
  declarations: [
    BooksSimpleListComponent,
  ],
})
export class BooksListModule { }
