import { NgModule } from '@angular/core';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { RouterModule } from '@angular/router';
import { routes } from './search.routes';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CommonComponentsModule,
  ],
  declarations: [SearchPageComponent],
})
export class SearchModule { }
