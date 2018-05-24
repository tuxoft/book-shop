import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { RouterModule } from '@angular/router';
import { routes } from './search.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SearchPageComponent],
})
export class SearchModule { }
