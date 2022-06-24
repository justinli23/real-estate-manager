Rails.application.routes.draw do
  # resources :agent_properties, only: [:index]
  resources :agents, only: [:index, :show, :create, :destroy]
  resources :properties, only: [:create, :index, :show]
  resources :clients, only: [:show, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/hello', to: 'application#hello_world'

  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end
