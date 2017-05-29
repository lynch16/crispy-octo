class ProductsController < ApplicationController
  def index
    @products = Product.all
    render json: @products, include: :product_listings
  end

  def show
    @product = Product.find_by(id: params[:id])
    render json: @product, include: :product_listings
  end
end
