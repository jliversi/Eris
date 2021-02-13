class Server < ApplicationRecord
  validates :name, :invite_code, presence: true

  before_validation :ensure_invite_code

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User
  
  has_many :memberships,
    foreign_key: :server_id,
    class_name: :ServerMembership

  has_many :members,
    through: :memberships,
    source: :user

  has_one_attached :photo


  private

  def ensure_invite_code
    return if self.invite_code
    self.invite_code = SecureRandom::urlsafe_base64(4)
  end

end