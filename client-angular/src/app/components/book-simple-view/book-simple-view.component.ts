import { Component, Input } from '@angular/core';
import { Book } from '../../model/book';

@Component({
  selector: 'book-simple-view',
  templateUrl: './book-simple-view.component.html',
  styleUrls: ['./book-simple-view.component.css'],
})
export class BookSimpleViewComponent {
  @Input() book: Book;
}
