# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

products = Product.create([
  {
    name: 'MHT',
    quantity: 5,
    size: 'sm',
    price: '1000'
  },
  {
    name: 'Corgi',
    quantity: 15,
    size: 'lg',
    price: '1400'
  },
  {
    name: 'MHT',
    quantity: 7,
    size: 'md',
    price: '1000'
  }
])
