class Admin::ProductsController < ApplicationController
  before_action :set_product, only: [:update, :destroy]

  def create
    @product = Product.new(product_params)
    if @product.save
      @product.parse_image(request.host_with_port)
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
    params.require(:product).permit(:name, :quantity, :ptype, :size, :price, :image_base)
  end

  def set_product
    @product = Product.find_by(id: params[:id])
  end
end
