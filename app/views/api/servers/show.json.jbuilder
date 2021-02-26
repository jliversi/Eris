json.key_format! camelize: :lower

json.server do 
  json.partial! 'api/servers/server', server: @server
end

json.members do 
  @server.members.each do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user: user
    end
  end
end

json.server_memberships do 
  @server.memberships.each do |m|
    json.set! m.id do
      json.extract! m, :user_id, :server_id
    end
  end
end

json.channels do 
  @server.channels.each do |channel|
    json.set! channel.id do
      json.partial! 'api/channels/channel', channel: channel
    end
  end
end