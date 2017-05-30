Rails.application.routes.draw do
  post 'paypal/create-payment', to: 'paypal#create_payment'
  post 'paypal/execute-payment', to: 'paypal#execute_payment'

  resources :products, only: [:index, :show]

  namespace :admin do
    resources :products, only: [:create, :update, :destroy]
    resources :product_listings, only: [:create, :update, :destroy]

  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
