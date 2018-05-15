import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { RouterModule } from '@angular/router';
import { routes } from './catalog.routes';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ButtonModule } from 'primeng/primeng';
import { CatalogBooksComponent } from './components/catalog-books/catalog-books.component';
import { CarouselModule } from '../carousel/carousel.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonModule,
    CarouselModule,
  ],
  declarations: [BookDetailComponent, CatalogComponent, CatalogBooksComponent],
})
export class CatalogModule { }
