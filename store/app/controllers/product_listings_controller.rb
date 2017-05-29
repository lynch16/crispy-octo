class ProductListingsController < ApplicationController
  def index
    @product_listings = ProductListing.all
    render json: @product_listings
  end

  def show
    @product_listing = ProductListing.find_by(id: params[:id])
    render json: @product_listing
  end
end
