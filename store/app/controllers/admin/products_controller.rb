class ProductsController < ApplicationController
  before_action :set_product, only: [:edit, :update, :destroy]
  def new
    @product = Product.new
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      render json: @product
    end
  end

  def edit
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
    params.require(:product).permit(:name, :quantity, :type, :size, :price)
  end
end
