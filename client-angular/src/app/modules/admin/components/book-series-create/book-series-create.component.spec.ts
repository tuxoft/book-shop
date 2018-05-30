import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSeriesCreateComponent } from './book-series-create.component';

describe('BookSeriesCreateComponent', () => {
  let component: BookSeriesCreateComponent;
  let fixture: ComponentFixture<BookSeriesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSeriesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSeriesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
