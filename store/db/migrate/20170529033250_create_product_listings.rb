class CreateProductListings < ActiveRecord::Migration[5.0]
  def change
    create_table :product_listings do |t|
      t.integer :product_id
      t.integer :quantity, default: 0
      t.string :size
      t.integer :price, default: 0

      t.timestamps
    end
  end
end
