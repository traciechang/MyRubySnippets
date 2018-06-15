class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user

  private
  def current_user
    return nil unless session[:user_id]
    @current_user = User.find(session[:user_id])
  end
end