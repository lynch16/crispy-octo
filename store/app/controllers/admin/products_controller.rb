class Admin::ProductsController < ApplicationController
  before_action :set_product, only: [:create, :update, :destroy]

  def create
    if @product.save
      @product.parse_image(request.host_with_port)
      render json: @product
    else
      render json: {errors: @product.errors.full_messages }, status: 422
    end
  end

  def update
    @product.update(product_params)
    if @product.save
      if !!params[:product][:image_base]
        @product.parse_image(request.host_with_port)
      end
      render json: @product
    else
      render json: {errors: @product.errors.full_messages }, status: 422
    end
  end

  def destroy
    @product.destroy
    redirect_to products_path
  end


  private
  def product_params
    params.require(:product).permit(:name, :ptype, :image_base)
  end

  def set_product
    @product = Product.find_by(id: params[:id]) || Product.new(product_params)
  end
end
