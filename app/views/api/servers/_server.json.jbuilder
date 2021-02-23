json.extract! server, :id, :name, :invite_code, :owner_id, :channel_ids
json.imageUrl server.image.attached? ? url_for(server.image) : nil
