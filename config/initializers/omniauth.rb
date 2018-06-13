# OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
    provider :google_oauth2, "306340345706-i0dco529gblmiqa9pmhumi76dbq805kd.apps.googleusercontent.com", "nY0jkZk1ejSxxBWik3n-W28w"
  end