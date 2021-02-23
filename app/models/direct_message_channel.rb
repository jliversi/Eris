# == Schema Information
#
# Table name: direct_message_channels
#
#  id            :bigint           not null, primary key
#  friendship_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class DirectMessageChannel < ApplicationRecord

end
