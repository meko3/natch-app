Rails.application.routes.draw do
  get 'pages/index'
  get 'api/v1/user', to: 'user#get'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
