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

  products: Product[] = [];
  sizes = ['xs', 'sm', 'md', 'lg', 'xl']
  pIndex: number;
  edittable: boolean = false;

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(products => {
      products.forEach(product => {
        this.products.push(new Product(product))
      });
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe(products => {
      products.forEach(product => {
        this.products.push(new Product(product))
      });
    });
  }

  add(event){
    this.products.push(new Product(event));
  }

  handleReset(product){
    product.editting = false;
    product.addListing = false;
  }
}
