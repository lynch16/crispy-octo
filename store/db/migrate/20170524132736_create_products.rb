class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :ptype, default: 'shirt'
      t.integer :quantity, default: 0
      t.string :size
      t.integer :price, default: 0
      t.attachment :picture      

      t.timestamps
    end
  end
end
