json.key_format! camelize: :lower

json.servers do 
  @servers.each do |server|
    json.set! server.id do 
      json.partial! 'api/servers/server', server: server
    end
  end
end

json.server_memberships do 
  @servers.each do |server|
    server.memberships.each do |m|
      json.set! m.id do 
        json.extract! m, :id, :user_id, :server_id
      end
    end
  end
end