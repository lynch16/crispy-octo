import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductListingService {

  constructor(private http: Http) {
    console.log('Product Listing Service started')
  }

  getProductListingss(){
    return this.http.get('http://localhost:3000/product_listings')
      .map(res => res.json());
  }

  createProductListing(productListing){
    return this.http.post('http://localhost:3000/admin/product_listings', {productListing})
      .map(res => res.json())
      .subscribe(err => console.log(err))
  }

  editProductListing(productListing){
    return this.http.put('http://localhost:3000/admin/product_listings/' + productListing.id, {productListing})
      .map(res => res.json())
      .subscribe(err => console.log(err))
  }
}
