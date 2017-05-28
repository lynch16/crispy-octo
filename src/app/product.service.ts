import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private http: Http) {
    console.log('Product Service started')
  }

  getProducts(){
    return this.http.get('http://localhost:3000/products')
      .map(res => res.json());
  }

  createProduct(product){
    return this.http.post('http://localhost:3000/admin/products', {product})
      .map(res => res.json())
      .subscribe(err => console.log(err))
  }

  editProduct(product){
    return this.http.put('http://localhost:3000/admin/products/' + product.id, {product})
      .map(res => res.json())
      .subscribe(err => console.log(err))
  }
}
