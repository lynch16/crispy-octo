import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-new-product-form',
  templateUrl: './new-product-form.component.html',
  styleUrls: ['./new-product-form.component.css'],
  providers: [ProductService]
})
export class NewProductFormComponent {

  sizes = ['xs', 'sm', 'md', 'lg', 'xl']
  types = ['shirt', 'bandana']
  model = new Product('', null, '', '', null, null);
  submitted = false;

  constructor(private productService: ProductService) {
  }

  uploadImage(fileInput: any){
    if (fileInput.target.files && fileInput.target.files[0]){
      let reader = new FileReader();
      reader.onload = (e: any) => {
        this.model.image_base = e.target.result;
      }
      reader.readAsDataURL(fileInput.target.files[0]);
    }
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
