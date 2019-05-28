const sum = require('../src/add');

test('add two numbers together',()=>{
  expect(sum.sum(3,4)).toBe(7)
});