json.server do 
  json.partial! 'api/servers/server', server: @server
end

json.members do 
  json.array! @server.members do |user|
    json.partial! 'api/users/user', user: user
  end
end