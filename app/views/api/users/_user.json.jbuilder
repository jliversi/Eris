json.extract! user, :id, :email, :username
json.discriminator user.format_discriminator