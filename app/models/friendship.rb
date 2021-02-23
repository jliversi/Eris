# == Schema Information
#
# Table name: friendships
#
#  id         :bigint           not null, primary key
#  inviter_id :integer          not null
#  invitee_id :integer          not null
#  accepted   :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Friendship < ApplicationRecord

end
