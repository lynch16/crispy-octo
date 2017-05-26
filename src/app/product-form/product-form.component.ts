import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  providers: [ProductService]
})
export class ProductFormComponent {

  sizes = ['xs', 'sm', 'md', 'lg', 'xl']
  types = ['shirt', 'bandana']

  model = new Product('MHT', 10, 'md', 'shirt', 1000, null);
  submitted = false;

  constructor(private productService: ProductService) {
  }

  addProduct(product: Product){
    this.productService.createProduct(product);
  }

  onSubmit() {
    console.log('submitted')
    this.addProduct(this.model)
    this.submitted = true;
 }

  get diagnostic() { return JSON.stringify(this.model); }

}
