# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

ActionMailer::Base.smtp_settings = {
  :port           => ENV['587'],
  :address        => ENV['smtp.gmail.com'],
  :user_name      => ENV['DevMatchRocio@gmail.com'],
  :password       => ENV['Arbolcaido2020.'],
  :domain         => 'protected-refuge-99929.herokuapp.com',
  :authentication => :plain,
}
ActionMailer::Base.delivery_method = :smtp
