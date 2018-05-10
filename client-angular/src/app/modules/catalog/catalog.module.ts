import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { RouterModule } from '@angular/router';
import { routes } from './catalog.routes';
import { CatalogComponent } from './components/catalog/catalog.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [BookDetailComponent, CatalogComponent],
})
export class CatalogModule { }
