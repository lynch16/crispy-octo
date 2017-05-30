require 'net/http'
require 'uri'

class Tools::PaypalService
  attr_accessor :amount, :token
  def initialize
    uri = URI.parse("https://api.sandbox.paypal.com/v1/oauth2/token")
    request = Net::HTTP::Post.new(uri)
    request.basic_auth("")
    request["Accept"] = "application/json"
    request["Accept-Language"] = "en_US"
    request.set_form_data(
      "grant_type" => "client_credentials",
    )

    req_options = {
      use_ssl: uri.scheme == "https",
    }

    response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
      http.request(request)
    end
    self.token = JSON(response.body)["access_token"]
  end

  def accept_payment
    url = URI.parse('https://api.sandbox.paypal.com/v1/payments/payment')
    data = self.data('20')
    headers = {
      'Content-Type' => 'application/json',
      'Authorization' => "Bearer #{self.token}"
    }
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    res = http.post(url.path, data.to_json, headers)
    JSON(res.body)
  end

  def response
    @payment
  end

  protected
  def data(amount)
    {
      intent: 'authorize',
      payer: {
        payment_method: 'paypal' },
      transactions: [ {
        amount: {
          total: amount,
          currency: 'USD'
        }
      }],
      note_to_payer: 'Contact me for any questions',
      redirect_urls: {
        return_url: "http://localhost:4200/return",
        cancel_url: "http://localhost:4000/cancel"
      }
    }
  end
end
