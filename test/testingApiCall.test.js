const { apiCall, Users } = require('../src/testingApiCall'),
fetch = require('node-fetch'),
axios = require('axios');

jest.mock('axios')
// jest.mock('node-fetch')

// describe('Mocking jsonplaceholder response data', () => {
//   test('the right data was returned', ()=> {
//     const responseData = 
//     { ok: true,
//       status: 200,
//       data: [{ id: 1, title: 'delectus aut autem'}]
//     }
//     // fetch.mockResolvedValue(responseData)
//     fetch.mockImplementation(() => Promise.resolve(responseData))

//     return firstApiCall().then(response => {

//     })
//   })
// });


describe('Mocking jsonplaceholder response data', () => {
  test('the right data was returned', ()=> {
    const responseData = 
    { ok: true,
      status: 200,
      data: [{ id: 1, title: 'delectus aut autem'}]
    }
    axios.get.mockResolvedValue(responseData)

    return apiCall().then(response => {
      expect(response[0].id).toEqual(1)
      expect(response[0].title). toEqual('delectus aut autem')
    })
  })
});


describe('Mocking jsonplaceholder response data', () => {
  test('should fetch users', () => {
    const users = [{name: 'Bob'}];
    const resp = {data: users};
    axios.get.mockResolvedValue(resp);
  
    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))
  
    return Users.all().then(data => console.log(data));
  });

});
