class Admin::ProductListingsController < ApplicationController
  before_action :set_product_listing, only: [:create, :update, :destroy]

  def create
    @product_listing = ProductListing.new(product_listing_params)
    if @product_listing.save
      render json: @product_listing
    else
      render json: {errors: @product_listing.errors.full_messages }, status: 422
    end
  end

  def update
    @product_listing.update(product_listing_params)
    if @product_listing.save
      render json: @product_listing
    else
      render json: {errors: @product_listing.errors.full_messages }, status: 422
    end
  end

  def destroy
    @product_listing.destroy
    redirect_to products_path
  end


  private
  def product_listing_params
    params.require(:productListing).permit(:product_id, :quantity, :size, :price)
  end

  def set_product_listing
    @product_listing = ProductListing.find_by(id: params[:id]) || ProductListing.new(product_listing_params)
  end
end
