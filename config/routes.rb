Rails.application.routes.draw do
  
  resources :categories, only: [:new, :create, :index]

  resources :goals, only: [:create, :index, :update, :destroy]

  resources :habits, only: [:create, :index, :new]
  
  resources :users, only: [:new, :create, :show, :index]

  resources :sessions, only: [:new, :create]
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
