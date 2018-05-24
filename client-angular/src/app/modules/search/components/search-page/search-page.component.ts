import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../../../model/book';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  @Input()
  searchResults: Book[];

  constructor() { }

  ngOnInit() {
  }

}
