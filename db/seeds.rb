
User.destroy_all


demo = User.create!({
  email: 'user@demo.com',
  password: 'hunter2',
  username: 'demoUser',
  birthday: '24-03-1993'
})

