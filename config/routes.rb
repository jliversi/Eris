Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy] do
      get 'check_email'
    end

    resources :servers, only: [:index, :show, :create, :update, :destroy] do
      post 'join/:user_id', to: 'servers#join'
      delete 'leave/:user_id', to: 'servers#leave'
    end
  end

  # TODO: Implement server invite routes and (ServerInvite ?) controller action

  # TODO: figure this out....
  get '/login', to: 'static_pages#root'
  get '/register', to: 'static_pages#root'
  get '/invite/:invite_code', to: 'static_pages#root'
  get '/channels', to: 'static_pages#root'
  get '/channels/:server_id', to: 'static_pages#root'
  get '/channels/:server_id/:channel_id', to: 'static_pages#root'

end
