const { apiCall } = require('../src/testingApiCall'),
fetch = require('node-fetch');

jest.mock('node-fetch')

describe('Mocking jsonplaceholder response data', () => {
  test('the right data was returned', ()=> {
    const responseData = 
    { ok: true,
      status_code: 200,
      data: [{ id: 1, title: 'delectus aut autem'}]
    }
    fetch.mockResolvedValue(responseData)
    apiCall().then(response => {
      expect(response.id).toBe(1)
    })
  })
});