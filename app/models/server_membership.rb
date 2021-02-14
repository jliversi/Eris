class ServerMembership < ApplicationRecord
  
  belongs_to :server

  belongs_to :user,
    dependent: :destroy

end