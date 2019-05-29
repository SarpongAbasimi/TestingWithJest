const Name = require('../src/name')

beforeEach(()=>{
  this.a_name = new Name();
  this.a_name.array.push('hello')
  console.log(this.a_name);
});

describe('Testing Jest setup',() => {
  it('should contain hello', () => {
    console.log(this.a_name)
    console.log(this.a_name.array)
    expect(this.a_name.array).toContain('hello')
  });

});

