import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2Carouselamos } from './components';
import { BookCarouselComponent } from './components/book-carousel/book-carousel.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { ButtonModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
  ],
  declarations: [
    Ng2Carouselamos,
    BookCarouselComponent,
    BookCardComponent,
  ],
  exports: [
    Ng2Carouselamos,
    BookCarouselComponent,
    BookCardComponent,
  ],
})
export class CarouselModule {
}
