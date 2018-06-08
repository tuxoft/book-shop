import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2Carouselamos } from './components';
import { BookCarouselComponent } from './components/book-carousel/book-carousel.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { ButtonModule } from 'primeng/primeng';
import { BreadcrumbsMenuComponent } from '../main/components/breadcrumbs-menu/breadcrumbs-menu.component';
import { OrderTotalComponent } from './components/order-total/order-total.component';
import { OrderItemsComponent } from './components/order-items/order-items.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule,
  ],
  declarations: [
    Ng2Carouselamos,
    BookCarouselComponent,
    BookCardComponent,
    BreadcrumbsMenuComponent,
    OrderTotalComponent,
    OrderItemsComponent,
  ],
  exports: [
    Ng2Carouselamos,
    BookCarouselComponent,
    BookCardComponent,
    BreadcrumbsMenuComponent,
    OrderTotalComponent,
    OrderItemsComponent,
  ],
})
export class CommonComponentsModule {
}
