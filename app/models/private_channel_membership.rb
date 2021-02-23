# == Schema Information
#
# Table name: private_channel_memberships
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class PrivateChannelMembership < ApplicationRecord

end
