Rails.application.routes.draw do
  resources :products, only: [:index, :show]

  namespace :admin do
    resources :products, only: [:create, :update, :destroy]
    resources :product_listings, only: [:create, :update, :destroy]

  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
