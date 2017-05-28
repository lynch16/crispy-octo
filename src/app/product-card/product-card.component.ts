import { Component } from '@angular/core';
import { ProductService } from '../product.service'
import { Product } from '../product'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  providers: [ProductService],
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  products: Product[];
  pIndex: number;
  edittable: boolean = false;

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  handleReset(product){
    if(product.editting == true){
      product.editting = false;
      this.getProducts();
    } 
  }

}
