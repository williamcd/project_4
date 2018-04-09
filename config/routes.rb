Rails.application.routes.draw do
  namespace :api do
    resources :shops do
      resources :items
    end
  end
end