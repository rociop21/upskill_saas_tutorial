# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

config.action_mailer.delivery_method = :smtp
config.action_mailer.smtp_settings = {
  address: 'smtp.gmail.com',
  port: 587,
  user_name: 'DevMatchRocio@gmail.com',
  password: 'Arbolcaido2020.',
  domain: 'protected-refuge-99929.herokuapp.com',
  authentication: 'plain',
  enable_starttls_auto: true
}