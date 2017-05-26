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

  createProduct(model){
    return this.http.post('http://localhost:3000/admin/products', {model})
      .map(res => res.json())
      .subscribe(err => console.log(err))
  }
}
