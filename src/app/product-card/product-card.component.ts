import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'

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
      this.products = products
    })

  }

  ngOnInit() {
  }

}

interface Product {
  name: string;
  quantity: number;
  size: string;
  type: string;
  price: number;
}
