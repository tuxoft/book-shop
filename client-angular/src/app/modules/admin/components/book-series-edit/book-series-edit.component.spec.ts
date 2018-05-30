import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSeriesEditComponent } from './book-series-edit.component';

describe('BookSeriesEditComponent', () => {
  let component: BookSeriesEditComponent;
  let fixture: ComponentFixture<BookSeriesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSeriesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSeriesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
