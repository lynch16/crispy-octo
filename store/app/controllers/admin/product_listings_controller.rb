class Admin::ProductListingsController < ApplicationController
  before_action :set_product_listing, only: [:update, :destroy]

  def create
    @product_listing = ProductListing.new(product_listing_params)
    byebug
    if @product_listing.save
      render json: @product_listing
    end
  end

  def update
    @product_listing.update(product_listing_params)
    if @product_listing.save
      render json: @product_listing
    end
  end

  def destroy
    @product_listing.destroy
    redirect_to products_path
  end


  private
  def product_listing_params
    byebug
    params.require(:productListing).permit(:product_id, :quantity, :size, :price)
  end

  def set_product_listing
    @product_listing = ProductListing.find_by(id: params[:id])
  end
end
