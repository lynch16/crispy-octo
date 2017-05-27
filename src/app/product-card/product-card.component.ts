import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'
import { Product } from '../product'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  providers: [ProductService],
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      console.log(products);
    });
  }

  ngOnInit() {
  }

}
