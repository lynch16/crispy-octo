class ProductsController < ApplicationController
  def index
    @products = Product.all
    render json: @products, include: {:product_listings => {methods: [:get_product_name]}}
  end

  def show
    @product = Product.find_by(id: params[:id])
    render json: @product, include: {:product_listings => {methods: [:get_product_name]}}
  end
end
