import { Component, Input,  Output, EventEmitter } from '@angular/core';
import { ProductListing } from '../product-listing';
import { Product } from '../product';
import { ProductListingService } from '../product-listing.service'

@Component({
  selector: 'app-new-product-listing-form',
  templateUrl: './new-product-listing-form.component.html',
  styleUrls: ['./new-product-listing-form.component.css'],
  providers: [ProductListingService]
})
export class NewProductListingFormComponent {

  @Input() productListing = new ProductListing(null, null, null, null, null); //id, product_id, quantity, size, price;
  @Input() editting = false;
  @Output() closeForm = new EventEmitter();

  sizes = ['xs', 'sm', 'md', 'lg', 'xl']
  types = ['shirt', 'bandana']
  submitted = false;

  constructor(private productService: ProductListingService) {
  }

  addProduct(productListing: ProductListing){
    this.productService.createProductListing(productListing);
  }

  editProduct(productListing){
    this.productService.editProductListing(productListing);
  }

  onSubmit() {
    if(this.editting === true) {
      console.log('Edits Submitted')
      this.editProduct(this.productListing);
      this.closeForm.emit();
      this.editting = false;
    } else {
      console.log('New Product Submitted')
      this.addProduct(this.productListing)
    }
    this.submitted = true;
 }

 resetProduct(){
   this.closeForm.emit();
 }

  get diagnostic() { return JSON.stringify(this.productListing); }

}
