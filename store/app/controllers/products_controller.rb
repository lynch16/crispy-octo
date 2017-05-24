class ProductsController < ApplicationController
  def index
    @products = Products.all
    render json: @products
  end

  def show
    @product = Products.find_by(id: params[:id])
    render json: @product
  end
end
