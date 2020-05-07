Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get '/theaters', to: 'homes#index'
   get '/theaters/:id', to: 'homes#index'
   get '/users/:id', to: 'homes#index'
end
