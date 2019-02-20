# frozen_string_literal: true

Rails.application.routes.draw do
  root 'static#index'
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  mount_devise_token_auth_for 'User', at: 'auth', defaults: { format: "json" }

  get '/unauthorized', to: 'static#index', as: :unauthorized
  get '/sign_up', to: 'static#index'
  get '/login', to: 'static#index'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :products
      resources :charges
      resources :orders
      resources :messages
      resources :users
    end
  end
end
