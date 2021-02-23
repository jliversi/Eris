
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
('W'..'Y').reverse_each do |c|
  Server.create!(name: c, owner_id: bob.id)
end

ServerMembership.create!(server_id: s1.id, user_id: bob.id)
ServerMembership.create!(server_id: s2.id, user_id: demo.id)

