Rails.application.routes.draw do
  root 'static_pages#root'

  # get 'login', to: redirect('/auth/google_oauth2'), as: 'login'
  # get 'logout', to: 'sessions#destroy', as: 'logout'

  get 'auth/:provider/callback', to: 'sessions#create'
  # get 'auth/facebook/callback', to: 'session#create'

  get 'auth/failure', to: redirect('/')

  resource :session, only: [:create, :destroy], :defaults => { :format => 'json' }
  resources :users, only: [:show, :update], :defaults => { :format => 'json' }
  resources :snippets, only: [:create, :show, :update], :defaults => { :format => 'json' }
  resources :outputs, only: [:show], :defaults => { :format => 'json' }
  resources :shared_snippets, only: [:create], :defaults => { :format => 'json' }
end
