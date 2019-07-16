const Name = require('../src/name')

beforeEach(()=>{
  this.a_name = new Name();
  this.a_name.array.push('hello')
});

describe('Testing Jest setup',() => {
  it('should contain hello', () => {
    expect(this.a_name.array).toContain('hello')
  });

});

