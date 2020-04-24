Rails.application.routes.draw do
  root to: 'application#index'
  namespace :api do
    resources :tasks
    resources :types
    # get '/types', to: 'types#index', as: 'types'
    # get '/types/:id', to: 'types#show', as: 'type'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  end
end