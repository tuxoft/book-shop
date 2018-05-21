import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../../../services/rest/book.service';
import { StoreState } from '../../../../store/reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
})
export class BookEditComponent implements OnInit {

  constructor(route: ActivatedRoute,
              private bookService: BookService,
              private store: Store<StoreState>) { }

  ngOnInit() {
  }

}
