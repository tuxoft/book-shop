import { Component, Input } from '@angular/core';
import { Book } from '../../model/book';

@Component({
  selector: 'book-simple-view',
  template: `
    <span>
      <div>{{book.id}}</div>
      <div>{{book.title}}</div>
      <div>{{book.authors}}</div>
      <div>{{book.price}}</div>
      <img src="{{book.coverUrl}}"/>
    </span>
  `,
})
export class BookSimpleViewComponent {
  @Input() book: Book;
}
