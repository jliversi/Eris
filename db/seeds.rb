
Server.destroy_all
User.destroy_all


demo = User.create!({
  email: 'user@demo.com',
  username: 'demoUser',
  password: 'hunter2'
})

bob = User.create!({
  email: 'bob1@bob.com',
  username: 'bobBobson',
  password: 'hunter2'
})

s1 = Server.create!(name: 'A', owner_id: demo.id)
('B'..'D').each do |c|
  Server.create!(name: c, owner_id: demo.id)
end

s2 = Server.create!(name: 'Z', owner_id: bob.id)
s3 = Server.create!(name: 'Y', owner_id: bob.id)
s4 = Server.create!(name: 'X', owner_id: bob.id)
s5 = Server.create!(name: 'W', owner_id: bob.id)

ServerMembership.create!(server_id: s1.id, user_id: bob.id)
ServerMembership.create!(server_id: s2.id, user_id: demo.id)
ServerMembership.create!(server_id: s3.id, user_id: demo.id)
ServerMembership.create!(server_id: s4.id, user_id: demo.id)
ServerMembership.create!(server_id: s5.id, user_id: demo.id)