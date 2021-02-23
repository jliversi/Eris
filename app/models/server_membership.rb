# == Schema Information
#
# Table name: server_memberships
#
#  id        :bigint           not null, primary key
#  user_id   :integer          not null
#  server_id :integer          not null
#
class ServerMembership < ApplicationRecord
  
  belongs_to :server

  belongs_to :user

end
