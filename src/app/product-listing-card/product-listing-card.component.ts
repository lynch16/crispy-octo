import { Component } from '@angular/core';
import { ProductListingService } from '../product-listing.service'
import { ProductListing } from '../product-listing'

@Component({
  selector: 'app-product-listing-card',
  templateUrl: './product-listing-card.component.html',
  providers: [ProductListingService],
  styleUrls: ['./product-listing-card.component.css']
})
export class ProductListingCardComponent {

  productListings: ProductListing[];
  pIndex: number;
  edittable: boolean = false;

  constructor(private productListingService: ProductListingService) {
    this.productListingService.getProductListingss().subscribe(productListings => {
      this.productListings = productListings;
    });
  }

  getProductListingss() {
    this.productListingService.getProductListingss().subscribe(productListings => {
      this.productListings = productListings;
    });
  }

  handleReset(productListing){
    if(productListing.editting == true){
      productListing.editting = false;
      this.getProductListingss();
    }
  }

}
