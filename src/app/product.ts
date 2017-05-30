import { ProductListing } from './product-listing'

export class Product {
  id: number;
  name: string;
  ptype: string;
  image_base: any;
  picture_url: any;
  product_listings: ProductListing[]

  constructor(productInfo) {
    if (productInfo == null) {
      return
    }
    this.id = productInfo.id;
    this.name = productInfo.name;
    this.ptype = productInfo.ptype;
    this.image_base = productInfo.image_base;
    this.picture_url = productInfo.picture_url;
    this.product_listings = productInfo.product_listings
  }

  sizeAvailable(size) {
      if (!this.product_listings) {
        return
      }
      let sizes = this.product_listings.map(listing => {
        return listing.size
      });
      return sizes.includes(size);
    }
}
