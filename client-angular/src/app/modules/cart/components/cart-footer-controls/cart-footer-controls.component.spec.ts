import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartFooterControlsComponent } from './cart-footer-controls.component';

describe('CartFooterControlsComponent', () => {
  let component: CartFooterControlsComponent;
  let fixture: ComponentFixture<CartFooterControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartFooterControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartFooterControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
