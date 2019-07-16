const { add } =  require('../src/add');
const fetch = require('node-fetch')
// const axios = require('axios');

jest.mock('node-fetch');

test('add two numbers together', ()=>{
  const myData = {'id': 'sap' }
  // fetch.mockResolvedValue(myData)
  fetch.mockImplementation(() => Promise.resolve(myData))
  add().then(response => {
    expect(response.id).toBe('sap')
  })
});