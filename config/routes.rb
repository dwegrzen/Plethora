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
  get 'about' => 'static#about_us', as: :about
  get 'contact' => 'static#contact_us', as: :contact
  get 'what' => 'static#what', as: :what
  get 'making' => 'static#making', as: :making
  get 'showdetail/(:gn_id)' => 'search#detailshow', as: :detailshow
  get 'albumdetail/(:gn_id)' => 'search#detailalbum', as: :detailalbum





  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
