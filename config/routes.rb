Rails.application.routes.draw do
  resources :users

  root 'users#index'

  get 'login' => 'users#login', as: :login
  delete 'lougout' => 'users#logout', as: :logout
  get 'albums' => 'albums#index'
  get 'shows' => 'shows#index'
  get 'finishedmusic' => 'albums#finished'
  get 'finishedshows' => 'shows#finished'
  get 'search/(:search)' => 'search#index'
  get 'searchdetail/(:search)' => 'search#show'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
