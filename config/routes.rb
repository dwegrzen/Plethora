Rails.application.routes.draw do

  resources :users
  resources :password_resets

  root 'users#index'

  get 'login' => 'users#sign_in', as: :sign_in
  post 'login' => 'users#login', as: :login
  delete 'logout' => 'users#logout', as: :logout
  get 'albums' => 'albums#index'
  get 'shows' => 'shows#index'
  get 'movies' => 'movies#index'
  get 'finishedmusic' => 'albums#finished'
  get 'finishedshows' => 'shows#finished'
  get 'search/(:search)' => 'search#index', as: :search
  get 'searchdetail/(:search)' => 'search#show', as: :searchdetail
  get 'about' => 'static#about_us', as: :about
  get 'contact' => 'static#contact_us', as: :contact
  get 'what' => 'static#what', as: :what
  get 'making' => 'static#making', as: :making
  get 'showdetail/(:gn_id)' => 'search#detailshow', as: :detailshow
  get 'albumdetail/(:gn_id)' => 'search#detailmusic', as: :detailalbum
  get 'moviedetail/(:tmdb_id)' => 'search#detailmovie', as: :detailmovie
  post 'shows' => 'shows#create'
  post 'albums' => 'albums#create'
  post 'movies' => 'movies#create'
  delete 'shows' => 'shows#destroyshow'
  patch 'showstatus' => 'shows#showcompletionstatus'
  delete 'albums' => 'albums#destroyalbum'
  patch 'albumstatus' => 'albums#albumcompletionstatus'
  delete 'movies' => 'movies#destroymovie'
  patch 'moviestatus' => 'movies#moviecompletionstatus'
  post 'albumaddasfinished' => 'albums#albumaddasfinished'
  post 'showaddasfinished' => 'shows#showaddasfinished'
  post 'movieaddasfinished' => 'movies#movieaddasfinished'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
