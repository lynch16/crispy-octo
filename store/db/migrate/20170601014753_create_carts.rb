class CreateCarts < ActiveRecord::Migration[5.0]
  def change
    create_table :carts do |t|
      t.integer :user_id
      t.boolean :checked_out, default: false
      t.string :transaction_token
      t.string :token_time
      t.string :transaction_id
      t.boolean :transaction_completed, default: false

      t.timestamps
    end
  end
end
