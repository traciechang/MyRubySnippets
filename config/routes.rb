Rails.application.routes.draw do
  root 'static_pages#root'

  get 'auth/:provider/callback', to: 'sessions#create'

  get 'auth/failure', to: redirect('/')

  resource :session, only: [:create, :destroy], :defaults => { :format => 'json' }
  resource :current_user, only: [:show], :defaults => { :format => 'json' }
  resources :users, only: [:show, :update], :defaults => { :format => 'json' }
  resources :snippets, only: [:create, :show, :update], :defaults => { :format => 'json' }
  resources :outputs, only: [:show], :defaults => { :format => 'json' }
  resources :shared_snippets, only: [:create], :defaults => { :format => 'json' }

  mount ActionCable.server => '/cable'
end
