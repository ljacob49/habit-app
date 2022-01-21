class ApplicationController < ActionController::API
  include ActionController::Cookies
  #before_action :require_login
  
  #def logged_in?
    #!!session[:user_id]
  #end

  #def current_user
    #User.find(session[:user_id])
  #end

  #def require_login
    #redirect_to new_session_path unless session.include? :user_id
 # end
  
  #def login(user)
    #session[:user_id] = user.id
  #end
end
