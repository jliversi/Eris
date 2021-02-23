# == Schema Information
#
# Table name: servers
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  owner_id    :integer          not null
#  invite_code :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Server < ApplicationRecord
  validates :name, :invite_code, presence: true

  before_validation :ensure_invite_code
  after_create :create_default_associations

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

  has_many :channels,
    dependent: :destroy

  has_one_attached :image


  private

  def create_default_associations
    ServerMembership.create(server_id: self.id, user_id: self.owner_id)
    Channel.create(name: 'general', server_id: self.id, is_private: false)
  end

  def ensure_invite_code
    return if self.invite_code
    self.invite_code = SecureRandom::urlsafe_base64(4)
  end

end
