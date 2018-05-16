import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWideCardComponent } from './product-wide-card.component';

describe('ProductWideCardComponent', () => {
  let component: ProductWideCardComponent;
  let fixture: ComponentFixture<ProductWideCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductWideCardComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWideCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
