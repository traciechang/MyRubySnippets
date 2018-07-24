OmniAuth.config.logger = Rails.logger

opts = { scope: 'user:email' }

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, Rails.application.secrets.google_client_id, Rails.application.secrets.google_client_secret
  provider :github, Rails.application.secrets.github_client_id, Rails.application.secrets.github_client_secret, opts
  provider :linkedin, Rails.application.secrets.linkedin_client_id, Rails.application.secrets.linkedin_client_secret
end


# Rails.application.config.middleware.use OmniAuth::Builder do
#   provider :github, Rails.application.secrets.github_client_id, Rails.application.secrets.github_client_secret, opts
# end

# Rails.application.config.middleware.use OmniAuth::Builder do
#   provider :linkedin, Rails.application.secrets.linkedin_client_id, Rails.application.secrets.linkedin_client_secret
# end