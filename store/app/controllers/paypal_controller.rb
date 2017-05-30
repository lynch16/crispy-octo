class PaypalController < ApplicationController
  include ActionController::HttpAuthentication::Token

  def create_payment
    @payment = Tools::PaypalService.new.accept_payment
    render json: @payment
  end

  def execute_payment
  end
end
