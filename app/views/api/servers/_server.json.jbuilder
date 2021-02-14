json.extract! server, :id, :name, :invite_code, :owner_id
json.imageUrl server.image.attached? ? url_for(server.image) : nil
