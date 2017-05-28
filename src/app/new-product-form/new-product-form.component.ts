import { Component, Input,  Output, EventEmitter } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-new-product-form',
  templateUrl: './new-product-form.component.html',
  styleUrls: ['./new-product-form.component.css'],
  providers: [ProductService]
})
export class NewProductFormComponent {

  @Input() product = new Product(null, null, null, null, "shirt", null, null); //id, name, quantity, size, ptype, price, image_base;
  @Input() editting = false;
  @Output() closeForm = new EventEmitter();

  sizes = ['xs', 'sm', 'md', 'lg', 'xl']
  types = ['shirt', 'bandana']
  submitted = false;

  constructor(private productService: ProductService) {
  }

  uploadImage(fileInput: any){
    if (fileInput.target.files && fileInput.target.files[0]){
      let reader = new FileReader();
      reader.onload = (e: any) => {
        this.product.image_base = e.target.result;
      }
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  addProduct(product: Product){
    this.productService.createProduct(product);
  }

  editProduct(product){
    this.productService.editProduct(product);
  }

  onSubmit() {
    if(this.editting === true) {
      console.log('Edits Submitted')
      this.editProduct(this.product);
      this.closeForm.emit();
      this.editting = false;
    } else {
      console.log('New Product Submitted')
      this.addProduct(this.product)
    }
    this.submitted = true;
 }

 resetProduct(){
   this.closeForm.emit();
 }

  get diagnostic() { return JSON.stringify(this.product); }

}
