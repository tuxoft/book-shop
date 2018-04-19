import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMenuHorizontalComponent } from './shop-menu-horizontal.component';

describe('ShopMenuHorizontalComponent', () => {
  let component: ShopMenuHorizontalComponent;
  let fixture: ComponentFixture<ShopMenuHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopMenuHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopMenuHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
