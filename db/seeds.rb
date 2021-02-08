
User.destroy_all


demo = User.create!({
  email: 'user@demo.com',
  password: 'hunter2',
  username: 'demoUser'
})

