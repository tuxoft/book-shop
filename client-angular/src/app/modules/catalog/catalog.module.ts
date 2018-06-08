import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { RouterModule } from '@angular/router';
import { routes } from './catalog.routes';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ButtonModule } from 'primeng/primeng';
import { CatalogBooksComponent } from './components/catalog-books/catalog-books.component';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { ProductWideCardComponent } from './components/product-wide-card/product-wide-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonModule,
    CommonComponentsModule,
  ],
  declarations: [
    BookDetailComponent,
    CatalogComponent,
    CatalogBooksComponent,
    ProductWideCardComponent],
})
export class CatalogModule { }
