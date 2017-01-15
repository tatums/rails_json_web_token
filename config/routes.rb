Rails.application.routes.draw do
  resources :articles
  devise_for :users
  post 'auth_user' => 'authentication#authenticate_user'
  get 'home' => 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
