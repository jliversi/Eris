class User < ApplicationRecord
    validates :username, :password_digest, :discriminator, presence: true
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true

    before_validation :ensure_session_token, :ensure_discriminator

    attr_reader :password

    # associations here
    has_many :server_memberships,
        foreign_key: :user_id,
        class_name: :ServerMembership

    has_many :joined_servers,
        through: :server_memberships,
        source: :server

    has_many :owned_servers,
        foreign_key: :user_id,
        class_name: :Server

    def User.find_by_credentials(email, password)
        user = User.find_by_email(email)
        if user && user.is_password?(password)
            return user
        else 
            return nil
        end
    end

    def User.find_by_identifier(identifier_string)
        username, discriminator = identifier_string.split('#')
        User.where(username: username, discriminator: discriminator.to_i)[0]
    end

    def User.generate_unique_discriminator(username)
        taken_discrims = User.where(username: username).pluck(:discriminator)
        available = (1..9999).to_a.reject {|n| taken_discrims.include?(n) }
        available.sample
    end

    def format_discriminator
        case Math.log10(discriminator).floor
        when 0
            return '000' + discriminator.to_s
        when 1
            return '00' + discriminator.to_s
        when 2
            return '0' + discriminator.to_s
        else
            return discriminator.to_s
        end
    end

    def password=(pw)
        @password = pw
        self.password_digest = BCrypt::Password.create(pw)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64(10)
        self.save!
        self.session_token
    end
    
    
    def is_password?(pw)
        BCrypt::Password.new(password_digest).is_password?(pw)
    end
    
    private
    
    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(10)
    end

    def ensure_discriminator
        return if self.discriminator
        self.discriminator = User.generate_unique_discriminator(username)
    end
end