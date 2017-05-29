class ProductListing < ApplicationRecord
  attr_accessor :name
  belongs_to :product
  validate :unique_size_per_product

  def unique_size_per_product
    product = Product.find_by(name: self.product.name)
    listingSizes = ProductListing.where(product_id: product.id).pluck(:size)
    if listingSizes.include?(self.size)
      errors.add(:size, "already exists for selected Product")
    end
  end


  def get_product_name
    self.name = self.product.name
  end
end
