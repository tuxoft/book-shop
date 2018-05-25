import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2Carouselamos } from './components';
import { BookCarouselComponent } from './components/book-carousel/book-carousel.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { ButtonModule } from 'primeng/primeng';
import { BreadcrumbsMenuComponent } from '../main/components/breadcrumbs-menu/breadcrumbs-menu.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
  ],
  declarations: [
    Ng2Carouselamos,
    BookCarouselComponent,
    BookCardComponent,
    BreadcrumbsMenuComponent,
  ],
  exports: [
    Ng2Carouselamos,
    BookCarouselComponent,
    BookCardComponent,
    BreadcrumbsMenuComponent,
  ],
})
export class CarouselModule {
}
