import { Component, Input } from '@angular/core';
import { BookOld } from '../../model/book-old';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
})
export class BookCardComponent {
  @Input() book: BookOld;
}
