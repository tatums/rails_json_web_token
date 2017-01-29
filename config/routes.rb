Rails.application.routes.draw do
  get 'home' => 'home#index'
  resources :articles
  devise_for :users
  post 'auth_user' => 'authentication#authenticate_user'
  post 'signup' => 'signup#create'
  post 'confirm' => 'signup#confirm'
  get "user" => "my_account#show"
  put "change_password" => "my_account#change_password"
  post "password_reset" => "password_reset#create"
  put "password_reset" => "password_reset#update"
end
