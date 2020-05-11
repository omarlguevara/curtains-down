Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get '/theaters', to: 'homes#index'
  get '/theaters/:id', to: 'homes#index'
  get '/users/:id', to: 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :theaters, only: [:index, :show, :new, :create]
      resources :reviews, only: [:create, :destroy]
      resources :users, only: [:show]
    end
  end
end
