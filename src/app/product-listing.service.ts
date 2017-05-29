import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductListingService {

  errors: any;
  data: any;;

  constructor(private http: Http) {
    console.log('Product Listing Service started')
  }

  createProductListing(productListing){
    return this.http.post('http://localhost:3000/admin/product_listings', {productListing})
      .map(res => res.json())
  }

  editProductListing(productListing){
    return this.http.put('http://localhost:3000/admin/product_listings/' + productListing.id, {productListing})
      .map(res => res.json())
  }
}
