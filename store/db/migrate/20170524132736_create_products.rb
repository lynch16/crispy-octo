class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :ptype, default: 'shirt'
      t.attachment :picture
      t.string :picture_url

      t.timestamps
    end
  end
end
