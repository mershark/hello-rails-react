Rails.application.routes.draw do
  root 'static#index'

  namespace :api do
    get 'greetings/random', to: 'greetings#random'
  end
end
