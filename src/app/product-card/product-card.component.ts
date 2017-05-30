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
  sizes = ['xs', 'sm', 'md', 'lg', 'xl']
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
    product.editting = false;
    product.addListing = false;
  }

  sizeAvailable(product, size) {
    let sizes = product.product_listings.map(listing => {
      return listing.size
    });
    return sizes.includes(size);
  }
}
