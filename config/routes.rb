# frozen_string_literal: true

Rails.application.routes.draw do
  root 'static#index'
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users

  get '/unauthorized', to: 'static#index', as: :unauthorized
  get '/sign_up', to: 'static#index'
  get '/login', to: 'static#index'
  get '/user_confirmed', to: 'static#index'
  get '/confirm_user', to: 'static#index'
  get '/contact', to: 'static#index'
  get '/account', to: 'static#index'
  get '/cart', to: 'static#index'
  get '/shop', to: 'static#index'
  get '/checkout', to: 'static#index'
  get '/products/:id', to: 'static#index'

  match "/404", :to => "static#index", :via => :all

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth', defaults: { format: "json" }
      resources :users do
        get :show_current_user, on: :collection
      end
      resources :products
      resources :charges
      resources :orders
      resources :messages
      resources :users
    end
  end
end
