import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListingCardComponent } from './product-listing-card.component';

describe('ProductListingCardComponent', () => {
  let component: ProductListingCardComponent;
  let fixture: ComponentFixture<ProductListingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
