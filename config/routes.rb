Rails.application.routes.draw do
    root to: 'pages#home'
    get 'about', to:'pages#about'
    devise_for :users, controllers: { registrations: 'users/registrations' }
    resources :contacts, only: :create
    get 'contact-us', to: 'contacts#new', as:  'new_contact'
    get 'comments', to: 'contacts#index'
    resources :users do
        resource :profile
    end
end