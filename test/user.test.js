const User = require('../src/user')

beforeEach(()=>{
  user = new User('sam')
})

test('can create instance of user', ()=>{
  expect(user.getname()).toBe('sam')
})