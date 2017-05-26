class Admin::ProductsController < ApplicationController
  before_action :set_product, only: [:edit, :update, :destroy]

  def create
    byebug
    @product = Product.new(product_params)
    if @product.save
      render json: @product
    end
  end

  def update
    @product.update(product_params)
    if @product.save
      render json: @product
    end
  end

  def destroy
    @product.destroy
    redirect_to products_path
  end


  private
  def product_params
    params.require(:model).permit(:name, :quantity, :type, :size, :price, :avatar)
  end
end
