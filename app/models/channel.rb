# == Schema Information
#
# Table name: channels
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string
#  server_id   :integer          not null
#  is_private  :boolean          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Channel < ApplicationRecord

  belongs_to :server
  has_one :owner,
    through: :server,
    source: :owner
  # TODO: finish associations


end
