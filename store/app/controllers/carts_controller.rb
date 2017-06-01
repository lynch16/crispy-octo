class CartsController < ApplicationController
  before_action :set_cart, only: [:create, :update]

  def create
  end

  def update
  end

  private
  def cart_params
    params.require(:cart).permit(:user_id, :checked_out, :transaction_token, :token_time, :transaction_id)
  end

  def set_cart
    @cart = Cart.where(transaction_completed: false).find_by(id: params[:id]) || Cart.new(cart_params)
  end
end
