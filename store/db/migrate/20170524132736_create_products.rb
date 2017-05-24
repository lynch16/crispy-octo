class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :type, default: 'shirt'
      t.integer :quantity, default: 0
      t.string :size
      t.integer :price, default: 0

      t.timestamps
    end
  end
end
