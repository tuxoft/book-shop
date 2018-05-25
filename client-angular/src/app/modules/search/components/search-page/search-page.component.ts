import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../../../model/book';
import { SearchService } from '../../../../services/rest/search.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {

  searchResults$: Observable<Book[]>;
  searchResults: Book[];
  queryParam$: Observable<any>;

  categoryId = -1;

  constructor(private searchService: SearchService, route: ActivatedRoute) {
    this.queryParam$ = route.queryParams;
    if (route.snapshot.queryParams['q']) {
      this.searchResults$ = this.searchService.search(route.snapshot.queryParams['q']);
      this.searchResults$.subscribe((results) => {
        this.searchResults = results;
      });
    }
    this.queryParam$.subscribe((param) => {
      this.searchResults$ = this.searchService.search(param['q']);
    });
  }

  ngOnInit() {
  }
}
