const myPromeis =  require('../src/promise')


// describe('Testing for the resolved value', ()=>{
//   test('the return value of the promis', ()=>{
//     myPromeis.myPromeis().then(resolvedvalue=>
//       expect(resolvedvalue).toBe('yes')
//     );
//   })
// })


describe('Testing for the resolved value', ()=>{
  test('the return value of the promis', ()=>{
    expect(myPromeis.myPromeis()).resolves.toBe('yes')
  })
})