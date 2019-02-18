# frozen_string_literal: true

Rails.application.routes.draw do
  root 'static#index'
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users

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
