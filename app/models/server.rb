class Server < ApplicationRecord
  validates :name, :invite_code, presence: true

  before_validation :ensure_invite_code
  after_create :add_owner_to_members

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User
  
  has_many :memberships,
    foreign_key: :server_id,
    class_name: :ServerMembership,
    dependent: :destroy

  has_many :members,
    through: :memberships,
    source: :user

  has_one_attached :image


  private

  def add_owner_to_members
    ServerMembership.create(server_id: self.id, user_id: self.owner_id )
  end

  def ensure_invite_code
    return if self.invite_code
    self.invite_code = SecureRandom::urlsafe_base64(4)
  end

end