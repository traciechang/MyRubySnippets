OmniAuth.config.logger = Rails.logger

# Rails.application.config.middleware.use OmniAuth::Builder do
#     provider :google_oauth2, "306340345706-i0dco529gblmiqa9pmhumi76dbq805kd.apps.googleusercontent.com", "nY0jkZk1ejSxxBWik3n-W28w"
# end

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, Rails.application.secrets.google_client_id, Rails.application.secrets.google_client_secret
end

opts = { scope: 'user:email' }

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :github, Rails.application.secrets.github_client_id, Rails.application.secrets.github_client_secret, opts
end

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :linkedin, Rails.application.secrets.linkedin_client_id, Rails.application.secrets.linkedin_client_secret
end