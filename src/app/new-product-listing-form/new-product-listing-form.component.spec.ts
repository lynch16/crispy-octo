import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductListingFormComponent } from './new-product-listing-form.component';

describe('NewProductListingFormComponent', () => {
  let component: NewProductListingFormComponent;
  let fixture: ComponentFixture<NewProductListingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProductListingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProductListingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
