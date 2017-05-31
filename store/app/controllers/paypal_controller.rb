class PaypalController < ApplicationController
  include ActionController::HttpAuthentication::Token

  def create_payment
    @payment = Tools::PaypalService.new.accept_payment
    render json: @payment
  end

  def execute_payment
    @payment = Tools::PaypalService.new.execute_payment(params[:paymentID], params[:payerID])
    render json: @payment
  end
end
