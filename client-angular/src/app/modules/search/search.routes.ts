import { Routes } from '@angular/router';
import { SearchPageComponent } from './components/search-page/search-page.component';

export const routes: Routes = [
  {
    path: '',
    component: SearchPageComponent,
    children: [],
  },
];
