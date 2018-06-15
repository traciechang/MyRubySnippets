Rails.application.routes.draw do
  root 'static_pages#root'

  get 'login', to: redirect('/auth/google_oauth2'), as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'

  get 'auth/:provider/callback', to: 'sessions#create'

  get 'auth/failure', to: redirect('/')

  resource :session, only: [:create, :destroy]
  resources :users, only: [:show]
end
