import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSeriesListComponent } from './book-series-list.component';

describe('BookSeriesListComponent', () => {
  let component: BookSeriesListComponent;
  let fixture: ComponentFixture<BookSeriesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSeriesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSeriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
