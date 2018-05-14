import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BooksSimpleListComponent } from './components/books-simple-list/books-simple-list.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/primeng';
import { routes } from './books-list.routes';
import { Ng2CarouselamosModule } from '../carousel/ng2-carouselamos.module';
import { BookCarouselComponent } from './components/book-carousel/book-carousel.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonModule,
    Ng2CarouselamosModule,
  ],
  declarations: [
    BookCardComponent,
    BooksSimpleListComponent,
    BookCarouselComponent,
  ],
})
export class BooksListModule { }
