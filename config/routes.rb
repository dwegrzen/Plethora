Rails.application.routes.draw do
  resources :users

  root 'users#index'

  get 'login' => 'users#sign_in', as: :sign_in
  post 'login' => 'users#login', as: :login
  delete 'lougout' => 'users#logout', as: :logout
  get 'albums' => 'albums#index'
  get 'shows' => 'shows#index'
  get 'finishedmusic' => 'albums#finished'
  get 'finishedshows' => 'shows#finished'
  get 'search/(:search)' => 'search#index', as: :search
  get 'searchdetail/(:search)' => 'search#show', as: :searchdetail



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
