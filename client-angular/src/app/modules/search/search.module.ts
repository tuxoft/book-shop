import { NgModule } from '@angular/core';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { RouterModule } from '@angular/router';
import { routes } from './search.routes';
import { MainModule } from '../main/main.module';
import { CarouselModule } from '../carousel/carousel.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CarouselModule,
  ],
  declarations: [SearchPageComponent],
})
export class SearchModule { }
