import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Book } from '../../../../model/book';

@Component({
  selector: 'book-carousel',
  templateUrl: './book-carousel.component.html',
  styleUrls: ['./book-carousel.component.scss'],
})
export class BookCarouselComponent implements OnInit {

  constructor() { }

  @Input()
  books: Book[];

  sliderWidth: number = 1300;

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log('was');
    if (event.target.innerWidth > 1360) {
      this.sliderWidth = 1300;
    } else {
      this.sliderWidth = 1000;
    }
  }
}
