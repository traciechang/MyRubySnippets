class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user

  private
  def current_user
    return nil unless session[:user_id]
    @current_user ||= User.find(session[:user_id])
  end

  def login(user)
    session[:user_id] = user.id
    @current_user = user
  end

  def logout
    session[:user_id] = nil
    @current_user = nil
  end
end