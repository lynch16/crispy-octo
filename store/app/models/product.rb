class Product < ApplicationRecord
  validates :name, presence: true
  validates :size, presence: true  
end
